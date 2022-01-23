import React from 'react'
import Button from '@material-ui/core/Button'
import Logo from '../images/LogoHorizontalW.svg'
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
    },
    paddingLeft: '20px',
    paddingRight: '20px',
    minWidth: '100px'
  },
  label: {
    color: 'white'
  }
})(Button);

class Header extends React.Component {
  render() {
    return (
      <div className="header-bar">
            {/* Ugly - change this later to not use picture */}
            <NavLink to="/" activeClassName="header-logo">
              <picture>
                  <source media="(max-width: 600px)" srcSet={LogoSymbol} />
                  <img src={Logo} title="Modulara" alt="Modulara Logo" />
              </picture>
            </NavLink>
        <div className="header-nav">
            {/* Make button later - don't have to use other sources  */}
            <Link to="/aboutus">
              <StyledButton disableRipple={true} fullWidth size="large" title="About">ABOUT</StyledButton>
            </Link>
            <Link to="/mission">
              <StyledButton disableRipple={true} fullWidth size="large" title="Mission">MISSION</StyledButton>
            </Link>
            <StyledButton disableRipple={true} fullWidth size="large" title="Contact"
            onClick={() => this.props.setContactModalOn()}>CONTACT</StyledButton>  
            {/* {console.log("AAAAAAAAAAAA", this.props.isContactModalActive)} */}
        </div>
      </div>
    )
  }
}

export default Header