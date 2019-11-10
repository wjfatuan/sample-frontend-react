import React from 'react';
import logo from './logo.svg';

class Home extends React.Component {
  render() {
      return <div class="card">
            <img src={logo} class="card-img-top" className="App-logo" alt="logo" />
            <div class="card-body">
              <p class="card-text text-center">Sample React App</p>
            </div>
            </div>
            ;
  }
}

export default Home;
