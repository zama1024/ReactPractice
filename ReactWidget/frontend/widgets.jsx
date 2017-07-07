import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Autocomplete from './autocomplete';


class Root extends React.Component {
  render(){
    let list = ["Saima", "Farshid", "Lameed", "Rafi"];
    return(
      <div>
        <Clock/>
        <Autocomplete list={list}/>
      </div>
    );
  }
}
window.addEventListener("DOMContentLoaded",() => {
  let root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
});
