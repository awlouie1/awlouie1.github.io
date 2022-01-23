import React from 'react';
import Card from './Card';
import { gsap } from "gsap/all"
import '../../style.css'

class CardShow extends React.Component {
  constructor(props) {
		super(props);

		this.cardT1 = new gsap.timeline(
      { 
        repeat: -1, 
      }
    )
	}

  render() {
    return (
      <div className="Process-cards">
        <div 
          className="Arrow-box" 
          onClick={() =>
            (this.props.cardActive > 1) ? this.props.setCardActive(this.props.cardActive - 1) : null
          }>
          <div className="card-arrow left" />
        </div>
        <Card 
          heading="Plan & Design"
          description="We determine the feaibility for placing your unit"
          cardNum={1}
          cardActive={this.props.cardActive}
          onClick={() => this.props.setCardActive(1)}
        />

        <Card 
          heading="Permit"
          description="We drive the permitting process for your project in DC, Montgomery County, Arlington, and Alexandria"
          cardNum={2}
          cardActive={this.props.cardActive}
          onClick={() => this.props.setCardActive(2)}
        />

        <Card 
          heading="Build"
          description="We assist with searching for a builder and walking through construction administration"
          cardNum={3}
          cardActive={this.props.cardActive}
          onClick={() => this.props.setCardActive(3)}
        />
        
        <Card 
          heading="Deliver"
          description="We help get your unit move-in ready!"
          cardNum={4}
          cardActive={this.props.cardActive}
          onClick={() => this.props.setCardActive(4)}
        />

      <div 
        className="Arrow-box" 
        onClick={() =>
          (this.props.cardActive < 4) ? this.props.setCardActive(this.props.cardActive + 1) : null
        }>
          <div className="card-arrow right" />
        </div>
      </div>
    )
  }
}

export default CardShow;