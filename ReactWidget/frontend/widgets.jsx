import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
  render(){
    return(
      <div>HI</div>
    );
  }
}
window.addEventListener("DOMContentLoaded",() => {
  let root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
});
