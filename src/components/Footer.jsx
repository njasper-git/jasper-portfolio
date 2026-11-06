import { flowers } from '../data/flowers'

function Footer() {
  return (
    <footer className="footer">
      <div className="hill hill-back"></div>

      {flowers.map((f) => (
        <svg
          key={f.id}
          className="flower"
          viewBox="0 0 80 140"
          aria-hidden="true"
          style={{ left: f.left, bottom: f.bottom, width: f.width }}
        >
          <path d="M40 62V140" stroke="#8fd3a8" strokeWidth="5" fill="none" />
          <ellipse
            cx={f.flip ? 52 : 28}
            cy={f.flip ? 108 : 105}
            rx="12"
            ry="6"
            fill="#8fd3a8"
            transform={f.flip ? 'rotate(30 52 108)' : 'rotate(-30 28 105)'}
          />
          <g fill={f.petal}>
            <circle cx="40" cy="22" r="15" />
            <circle cx="57" cy="35" r="15" />
            <circle cx="51" cy="54" r="15" />
            <circle cx="29" cy="54" r="15" />
            <circle cx="23" cy="35" r="15" />
          </g>
          <circle cx="40" cy="40" r="10" fill={f.center} />
        </svg>
      ))}

      <div className="hill hill-front"></div>
      <p className="footer-text">&copy; 2026 Jasper Portfolio</p>
    </footer>
  )
}

export default Footer