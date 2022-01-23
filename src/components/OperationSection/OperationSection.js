import React from 'react'
import OpCard from './OpCard';
import opImgOne from '../../images/Z1.png'
import opImgTwo from '../../images/Z2.png'
import opImgThree from '../../images/Z3.png'
import opImgFour from '../../images/Z4.png'
import '../../style.css'

class OperationSection extends React.Component {

  render() {
    return (
      <div className='opSection'>

          <OpCard
            image={opImgOne}
            title='Plan & Design'
            prompt='We determine the feasibility for placing your unit.'
          />
          <OpCard 
            image={opImgTwo}
            title='Permit'
            prompt='We drive the permitting process for your project in DC, Montgomery County, Arlington, and Alexandria.'
          />
          <OpCard 
            image={opImgThree}
            title='Build'
            prompt='We assist with searching for a builder and walking through construction administration.'
          />
          <OpCard 
            image={opImgFour}
            title='Deliver'
            prompt='We help get your unit move-in ready!'
          />
          
      </div>
    )
  }
}

export default OperationSection