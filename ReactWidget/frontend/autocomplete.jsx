import React from 'react';
import ReactDOM from 'react-dom';

class Autocomplete extends React.Component {
  constructor(){
    super();
    this.state = {
      list: [],
      inputVal: ""
    };
  }

  findItem(e){
    e.preventDefault();
    this.setState({inputVal: e.target.value});
    for (var i = 0; i < this.props.list.length; i++) {
      if(this.props.list[i].startsWith(this.state.inputVal)){
        this.setState({list: this.state.list.concat([this.props.list[i]])});
      }
    }
  }

  componentDidMount(){
  }

  render(){
    return(
      <div>
        <input onChange={this.findItem.bind(this)}></input>
        <ul>
          {this.state.list}
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
