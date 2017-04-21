import React, { Component } from 'react';

class App extends Component {
  state = {
        term : " ",
        img : " "
    }
  

  update = (e) => {
    this.setState({
      term : (e.target.value)
    })
  }

  handleSubmit = (event) => {
      event.preventDefault();
      const api_key = 'dc6zaTOxFJmzC';
      const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
      fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ 
        term : '',
        img: data.data[0].images.fixed_height.url
      }))
      .catch(e => console.log('error', e))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome Jeethu</h2>
          <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.update}/>
          <button>Search</button>
          </form>
          <hr/>
          <img src = {this.state.img} height="200" alt={this.state.term} />
        </div>
      </div>
    );
  }
}

export default App;
