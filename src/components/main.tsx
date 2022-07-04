import Chart1 from './chart-1'
import Part from './part'

const Main = () => {
  return (
    <main className="app-main">
      <Part className="section1 distribution">
        <h2 className="part-title">{'分布区域统计'}</h2>
        <div className="total">
          <div className="total-item">
            <div className="total-header">
              <div className="square"></div>
              <div className="title">listed company</div>
            </div>
            <div className="quantity">2033</div>
          </div>
          <div className="total-item">
            <div className="total-header">
              <div className="square"></div>
              <div className="title">listed company</div>
            </div>
            <div className="quantity">1032</div>
          </div>
        </div>
        <Chart1 />
      </Part>
      <Part className="section2"></Part>
      <Part className="section3"></Part>
      <Part className="section4"></Part>
      <Part className="section5"></Part>
      <Part className="section6"></Part>
      <Part className="section7"></Part>
      <Part className="section8"></Part>
      <Part className="section9"></Part>
    </main>
  )
}

export default Main
