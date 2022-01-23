import React from 'react'
import '../../style.css'

class OpCard extends React.Component {

  render() {
    return (
      <div className='opCard'>
        <div className='opCardImg'>
          <img
            className='opCardImgg'
            src={this.props.image}
            title={this.props.title}
            alt={this.props.title}
          />
        </div>
        
        <div className='opCardTitle'>
          {this.props.title}
        </div>
        
        <div className='opCardPrompt'>
          {this.props.prompt}
        </div>
    </div>
    )
  }
}

export default OpCard