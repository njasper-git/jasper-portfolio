import { decorations } from '../data/decorations'

function Decorations() {
  return (
    <div className="decorations" aria-hidden="true">
      <div className="moon"></div>

      {decorations.map((item) => (
        <div
          key={item.id}
          className={item.shape}
          style={{
            left: item.left,
            top: item.top,
            width: item.size,
            height: item.size,
            background: item.color,
            animationDelay: item.delay,
          }}
        ></div>
      ))}

      <div className="cloud cloud-1">
        <span className="base"></span>
        <span className="p1"></span>
        <span className="p2"></span>
      </div>
      <div className="cloud cloud-2">
        <span className="base"></span>
        <span className="p1"></span>
        <span className="p2"></span>
      </div>
    </div>
  )
}

export default Decorations