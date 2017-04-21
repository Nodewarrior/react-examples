import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      click : 0,
      show : true
    }
  }

  incItem = () => {
    this.setState({
      click : this.state.click + 1
    })
  }

  decItem = () => {
    this.setState({
      click : this.state.click - 1
    })
  }

  toggleClick = () => {
    this.setState({
      show : !this.state.show
    })
  }

  render() {
    return (
      <div className="App">
             <button onClick={this.incItem}>Click to INC</button> 
             <button onClick={this.decItem}>Click to DEC</button> 
             <button onClick={this.toggleClick}>{this.state.show ? `Hide Number` : `Show Number`}</button> 
             {this.state.show ? <h2>{this.state.click}</h2> : ' ' }
      </div>
    );
  }
}

export default App;
