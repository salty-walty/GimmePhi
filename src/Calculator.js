import React from 'react';
import './Calculator.css'

const TIMES_PHI = 1.618033988749 , OVER_PHI = 1;


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesPhi: '',
      overPhi: '',
    }

    this.handleTimesPhiChange = this.handleTimesPhiChange.bind(this);
    this.handleOverPhiChange = this.handleOverPhiChange.bind(this);
}

  componentDidMount() {
    this.setState({
      timesPhi: TIMES_PHI,
      overPhi: OVER_PHI,
    })
  }

  handleTimesPhiChange(event) {
    this.setState({timesPhi: event.target.value});
    this.setState({overPhi: event.target.value / 1.618033988749 });
  }

  handleOverPhiChange(event) {
    this.setState({overPhi: event.target.value});
    this.setState({timesPhi: event.target.value * 1.618033988749 })
  }

  render() {
    let timesPhiElement, overPhiElement;
    
    timesPhiElement = <textarea 
    className="timesPhi-textarea" 
    onChange={this.handleTimesPhiChange}
    value={this.state.timesPhi} 
    ></textarea>;

    overPhiElement = <textarea 
    className="overPhi-textarea" 
    onChange={this.handleOverPhiChange} 
    value={this.state.overPhi}
    ></textarea>;


    return (
          <div className="calc-div">
            {timesPhiElement}
            {overPhiElement}
          </div>
    );
  }
}
export default Calculator;
