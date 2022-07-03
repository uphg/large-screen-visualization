import { PropsWithChildren } from "react"
import classnames from 'classnames'


const Part = (props: PropsWithChildren & { className?: string }) => {
  return (
    <section className={classnames(['part', props.className])}>
      {props.children}
      <div className="corner-mark-wrap top-left">
        <div className="corner-mark"></div>
      </div>
      <div className="corner-mark-wrap top-right">
        <div className="corner-mark"></div>
      </div>
      <div className="corner-mark-wrap bottom-left">
        <div className="corner-mark"></div>
      </div>
      <div className="corner-mark-wrap bottom-right">
        <div className="corner-mark"></div>
      </div>
    </section>
  )
}

export default Part