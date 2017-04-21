import React from 'react';
//const name = `Naveen`

//const App = () => <h1>Hello, {name}</h1>

class App extends React.Component{
  constructor(){
    super()
    this.state={
      greet: `Fizz`,
    }
    this.update=this.update.bind(this)
  }


update(e) {
  this.setState({
    greet: this.refs.greet.value
  })
}

  render(){
    return(
      <div>
         <Title text="Gutle" />
         <h2><b>{this.state.greet}</b></h2>
         <hr/>
         <input ref="greet" onChange={this.update}/>
     </div>
    );
  }
}


const Title = (props) => {
  return (
      <h1>Title: {props.text}</h1>
  );
};





export default App;