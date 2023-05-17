
const TotalItem = (props: { title: string, total: number | string }) => {
  const { title, total } = props
  return (
    <div className="total-item">
      <div className="total-header">
        <div className="square"></div>
        <div className="title">{title}</div>
      </div>
      <div className="quantity">{total}</div>
    </div>
  )
}

export default TotalItem
