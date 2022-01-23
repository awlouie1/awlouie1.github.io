import React from 'react'
import Logo from '../images/LogoSymbol.svg'

const bgLayout = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  width: '100%',
  height: '100%',

  backgroundColor: 'rgb(40, 40, 40)',
  backgroundSize: 'contain',
}

const imgOne = {
  maxWidth: '150px',
  height: 'auto',
}

const statement = {
  display: 'flex',
  position: 'absolute',
  marginTop: '250px',
  
  fontSize: '40px',
  fontWeight: '600',
  fontFamily: 'Georama, sans-serif',
  color: 'white',
}


class Prequel extends React.Component {
  render() {
    return (
      <div style={bgLayout}>
        <img 
          style={imgOne}
          src={Logo}
          title="Modulara"
          alt="Modulara Logo"
        />
        <div style={statement}>
          Coming Soon!
        </div>

      </div>
    )
  }
}

export default Prequel