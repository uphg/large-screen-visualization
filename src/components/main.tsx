import Chart1 from './chart-1'
import Part from './part'

const Main = () => {
  return (
    <main className="app-main">
      <div className="piece section1">
        <Part className="domination">
          <h2 className="part-title">{'分布区域统计'}</h2>
          <Chart1 />
        </Part>
      </div>
      <Part className="section2"></Part>
      <Part className="section3"></Part>
      <Part className="section4"></Part>
      <Part className="section5"></Part>
    </main>
  )
}

export default Main
