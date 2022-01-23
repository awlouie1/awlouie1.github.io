import React from 'react'
import CardShow from './CardShow'
import MediaShow from './MediaShow'
import '../../style.css'

class ProcessSection extends React.Component {
  constructor(props) {
    super(props)
    this.cardNum = 1;
    this.state = {cardActive: 1};
    this.setCardActive = this.setCardActive.bind(this);
  }

  setCardActive = (num) => {
    this.setState({
      cardActive: num
    })
  }

  render() {
    const checkpoint = window.innerHeight;

    const scrollFade = () => {
      const currentScroll = window.pageYOffset
      console.log(currentScroll)
      let opacity = (currentScroll <= checkpoint ? (0 + currentScroll / checkpoint) : 1)
      document.querySelector(".Process-layout").style.opacity = opacity;

      if (currentScroll >= checkpoint) {
        window.removeEventListener("scroll", scrollFade)
      }
    }
 
    window.addEventListener("scroll", scrollFade);

    return (
      <div className="Process-layout">
        <MediaShow 
          cardActive={this.state.cardActive}
        />

        <CardShow 
          cardActive={this.state.cardActive} 
          setCardActive={this.setCardActive}
        />
      </div>
    )
  }
}

export default ProcessSection