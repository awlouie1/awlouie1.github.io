import React from 'react'
import BackgroundFade from "./BackgroundFade"
import ContactForm from './ContactForm'
import Header from './Header'

import '../style.css'

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-layout page">
        <div className="landing-container">
          <Header  
            isContactModalActive={this.props.isContactModalActive}
            setContactModalOn={this.props.setContactModalOn} 
            setContactModalOff={this.props.setContactModalOff}
          />
        </div>

        <BackgroundFade />

        <div className="mission-container">
          <p className="mission">We make homeownership more affordable by adding an accessory dwelling unit to your backyard.</p>
        </div>

        <div className="arrow-container">
          <div 
            className="arrow-btn"
            onClick={() => window.scrollBy({
              top: window.innerHeight,
              behavior: 'smooth'
            })}>
            <div className="arrow-icon down" />
          </div>
        </div>

        <ContactForm 
          className={this.props.isContactModalActive ? "contact-layout active" : "contact-layout inactive"}
          setContactModalOff={this.props.setContactModalOff}
        />

      </div>
    )
  }
}

export default Landing