import React from 'react';
import moment from 'moment';
import tzone from 'moment-timezone';

export default class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.setTime = this.setTime.bind(this);
    this.setDate = this.setDate.bind(this);
    this.state = {
      date: '',
      time: ''
    };
  }
  componentDidMount () {
    this.setTime();
    this.setDate();
  }

  setTime () {
    this.setState({
      time: tzone().tz(this.props.zone).format('H:mm:ss')
    });
    setTimeout(this.setTime, 1000)
  }

  setDate () {
    this.setState({
      date: tzone().tz(this.props.zone).format('D, MMMM YYYY ')
    })
  }

  render () {
    return (
      <div>
        <h2>{this.state.date}</h2>
        <div className="time">
          <h3>{this.state.time}</h3>
        </div>
      </div>
    )
  }
}

