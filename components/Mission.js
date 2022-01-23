import React from 'react'
import Button from '@material-ui/core/Button'
// import Footer from "./Footer"
import Logo from '../images/LogoHorizontal.png'
import LogoSymbol from '../images/LogoSymbol.svg'
import { withStyles } from '@material-ui/core/styles'
import { Link, NavLink } from "react-router-dom"

import '../style.css'

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    background: 'transparent',
    fontWeight: '600',
    '&:hover': {
      background: 'linear-gradient(to bottom, rgb(20, 20, 20) 0.1%, transparent)'
    }
  },
  label: {
    color: 'black'
  }
})(Button);

class Mission extends React.Component {
  render() {
    return (
      <div className="mission-layout page">
        
        {/* Black text Header */}

        <div className="header-bar">
            {/* Ugly - change this later to not use picture */}
            <NavLink to="/" activeClassName="header-logo">
              <picture>
                  <source media="(max-width: 620px)" srcSet={LogoSymbol} />
                  <img src={Logo} title="Modulara" alt="Modulara Logo" />
              </picture>
            </NavLink>
        <div className="header-nav">
            {/* Make button later - don't have to use other sources  */}
            <Link to="/aboutus">
              <StyledButton disableRipple={true} fullWidth size="large" title="About" >ABOUT</StyledButton>
            </Link>
            <Link to="/mission">
              <StyledButton disableRipple={true} fullWidth size="large" title="Mission" >MISSION</StyledButton>
            </Link>
            <Link to="/">
              <StyledButton disableRipple={true} fullWidth size="large" title="Contact" onClick={() => this.props.setContactModalOn()}>CONTACT</StyledButton>      
            </Link>
        </div>
      </div>


        <div className="mission-page-container">
            <div className="mission-text">
              <h2>Operation Dumbo Drop</h2>
              <p>If you ask Rick Astley for a DVD of the movie Up, he won’t give it to you because he’s never gonna give you Up. However, by not giving you Up like you asked for it, he’s letting you down. This is known as the Astley paradox.</p>
            </div>
        </div>
        <div className="mission-bg"/>
        {/* Background is separate from container to show filter */}

        {/* <Footer /> */}
      </div>
    )
  }
}

export default Mission