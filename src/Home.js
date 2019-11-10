import React from 'react';
import axios from 'axios';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "MTgzNjYwMQ",
      url: "https://cdn2.thecatapi.com/images/MTgzNjYwMQ.jpg",
      width: 512,
      height: 486
    };
    this.loadCat = this.loadCat.bind(this);
  }

  loadCat() {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=1', {
    })
      .then((response) => {
        this.setState(state => (response.data[0]));
      }, (error) => {
        console.log(error);
      });
  }

  render() {
    return <div class="card" style={{ width: this.state.width }}>
      <img src={this.state.url} class="card-img-top" className="App-logo" alt="logo" style={{ height: this.state.height }} />
      <div class="card-body">
        <p class="card-text text-center">Sample React App</p>
        <a href="#" class="btn btn-primary text-center" onClick={this.loadCat}>Load cat!</a>
      </div>
    </div>
      ;
  }
}

export default Home;
