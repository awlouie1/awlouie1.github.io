import React from "react"
import { gsap } from "gsap/all"
import '../style.css'

const images = [ ".ADU1", ".ADU2", ".ADU3", ".ADU4" ]
// console.log(images)
const fadeIn = (image) => {
  return gsap.timeline()
    .set(image, {zIndex: 1}, 3)
    .fromTo(image, {opacity: 0}, {opacity: 1})
    .set(image, {zIndex: 0}, "+=2")
}

const imagesAfterFirst = images.slice(1);

class BackgroundFade extends React.Component {
	
	constructor(props) {
		super(props);

		this.backgroundT1 = new gsap.timeline(
      { 
        repeat: -1, 
      }
    )

    this.ADU1 = null
    this.ADU2 = null
    this.ADU3 = null
    this.ADU4 = null
	}
  
	componentDidMount() {
      // Fade in the images after the first
      // imagesAfterFirst.forEach(image => this.backgroundT1.add(fadeIn(image)));

      // // Fade in the first image at the end
      // this.backgroundT1.add(fadeIn(images[0]))

      // // Make sure the first image is visible at the start of the timeline
      // this.backgroundT1.set(images[0], {opacity: 1}, 0)
	}

	render() {
		return (
        <div className="landPage">
          <div className="ADU1" ref={ div => this.ADU1 = div} />
          {/* <div className="ADU2" ref={ div => this.ADU2 = div} />
          <div className="ADU3" ref={ div => this.ADU3 = div} />
          <div className="ADU4" ref={ div => this.ADU4 = div} /> */}
        </div>
    )
	}
}

export default BackgroundFade