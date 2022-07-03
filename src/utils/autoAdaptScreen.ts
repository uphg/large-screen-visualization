const statusKey = Symbol() as unknown as number

// 根据屏幕适配 root 宽高和根元素 font-size
function autoAdaptScreen(root: HTMLElement) {
  const { pageWidth, pageHeight } = getPageSize()
  // @ts-ignore
  window['pageWidth'] = pageWidth
  setHtmlFontSize(pageWidth)
  // 设置设备宽高
  root.style.width = pageWidth + 'px'
  root.style.height = pageHeight + 'px'
}

function getPageSize() {
  const clientWidth = document.documentElement.clientWidth
  const clientHeight = document.documentElement.clientHeight
  const basePageWidth = clientWidth / clientHeight > 16 / 9 ? clientHeight * (16 / 9) : clientWidth
  const pageWidth = Math.floor(basePageWidth)

  const pageHeight = pageWidth / (16 / 9)

  return { pageWidth, pageHeight }
}

function setHtmlFontSize(pageWidth: number) {
  let style
  if (window[statusKey]) {
    style = document.head.querySelector('#auto-screen-style')
  } else {
    // @ts-ignore
    window[statusKey] = true
    style = document.createElement('style')
    style.setAttribute('type', 'text/css')
    style.setAttribute('id', 'auto-screen-style')

    const head = document.head
    const title = head.querySelector('title')
    head.insertBefore(style!, title!.nextSibling);
  }

  style!.innerHTML = `html {
    font-size: ${pageWidth / 100}px;
  }`

  return style 
}

export default autoAdaptScreen
