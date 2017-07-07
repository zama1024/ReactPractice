import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
  constructor(){
    super();
    this.state = {date: new Date()};
  }

  componentDidMount(){
    window.setInterval(this.tick.bind(this), 1000);
  }

  tick(){
    this.setState({date: new Date()});
  }

  render(){
    return(
      <div>
        {this.state.date.toString()}
      </div>
    );
  }
}

export default Clock;
