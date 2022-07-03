const statusKey = Symbol() as unknown as number

function autoAdaptTocreen(root: HTMLElement) {
  let style = null
  if (!window[statusKey]) {
    // @ts-ignore
    window[statusKey] = true
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight
    const basePageWidth = clientWidth / clientHeight > 16 / 9 ? clientHeight * (16 / 9) : clientWidth
    const pageWidth = Math.floor(basePageWidth)
    const pageHeight = pageWidth / (16 / 9)
    const head = document.head
    const title = head.querySelector('title')
    style = document.createElement('style')
    style.setAttribute('type', 'text/css')
    style.setAttribute('id', 'auto-screen-style')
    style.innerHTML = `html {
      font-size: ${pageWidth / 100}px;
    }`
    head.insertBefore(style, title!.nextSibling);

    // 设置设备宽高
    root.style.width = pageWidth + 'px'
    root.style.height = pageHeight + 'px'
  }

  return style
}

export default autoAdaptTocreen
