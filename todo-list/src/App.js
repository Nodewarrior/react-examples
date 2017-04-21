import React, { Component } from 'react';
import List from './List';

class App extends Component {
  constructor(){
    super();
    this.state = {
      term : '',
      items: []
    }
  }

  update = (event) => {
      this.setState({term: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term : " ",
      items : [...this.state.items, this.state.term]
    })
  }

  render() {
    return (
      <div>
       <form className="App" onSubmit={this.onSubmit}>
         <input value={this.state.term} onChange={this.update} />
         <hr/>
         <button>Submit</button>
         <List items={this.state.items} />
       </form>     
      </div>
    );
  }
}

export default App;
