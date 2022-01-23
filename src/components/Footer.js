import React from 'react'
import '../style.css'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-layout">
        <footer> 
          <a 
            className="footer-sign"
            href="./" 
            title="Home"
          >
            Modulara © 2021 
          </a>
        </footer>
      </div>
    )
  }
}

export default Footer