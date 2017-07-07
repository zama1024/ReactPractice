import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

class Root extends React.Component {
  render(){
    return(
      <div>
        <Clock/>
      </div>
    );
  }
}
window.addEventListener("DOMContentLoaded",() => {
  let root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
});
