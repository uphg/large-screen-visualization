const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left"></div>
      <div className="header-content">
        <h2 className="title">国家电网华东分布</h2>
        <div className="triangle-wrap left">
          <div className="triangle-left"></div>
          <div className="sub-triangle-wrap left">
            <div className="sub-triangle-left"></div>
          </div>
        </div>
        <div className="triangle-wrap right">
          <div className="triangle-right"></div>
          <div className="sub-triangle-wrap right">
            <div className="sub-triangle-right"></div>
          </div>
        </div>
        
      </div>
      <div className="header-right"></div>
    </header>
  )
}

export default Header
