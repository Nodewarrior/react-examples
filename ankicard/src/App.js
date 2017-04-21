import React  from 'react';
import axios from 'axios';



class App extends React.Component{
  state={
    cards:[]
  };

addNewCard = (responseData) => {
  this.setState(prevState => ({
      cards: prevState.cards.concat(responseData)
  }))
}

  render(){
    return(
      <div>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}


class Form extends React.Component{
  state = {
    userName: ''
  }
  handleSubmit = (event) => {
      event.preventDefault();
      console.log('Event: Form Submit', this.state.userName);
      //ajax
       axios.get(`https://api.github.com/users/${this.state.userName}`)
         .then(resp => {
             this.props.onSubmit(resp.data);
             this.setState({
               userName: ''
             })
         });

  };
  render(){
    return(
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Git_UserName"
            value={this.state.userName}
            onChange={(event) => this.setState({ userName: event.target.value })}
             required/>
          <button type="submit">Add Card!</button>
        </form>
    );
  }
}

//Observe Card List component is the parent of CardComponent!
const CardList = (props) => {
return (
      <div>
          {props.cards.map((card, index) => <Card key={card.id} {...card} />)}
        </div>
       
    );
}

const Card = (props) => {
  return(
      <div style={{margin : '1em'}}>
        <img width='100em' src={props.avatar_url} alt="Anki_Card" />
        <div style={{display: 'inline-block', marginLeft: 10}}>
          <div style={{fontSize:'1.25em', fontWeight:'bold'}}>{props.name}</div>
          <div>{props.company}</div>
        </div>
      </div>
  );
}






export default App;
