import React from 'react';
import './App.css';
import Button from "./Button";
import Wisdom from "./Wisdom";
import WisdomList from "./WisdomList";

class App extends React.Component{
  state = {
      title: '...and said Chuck ',
      arrJokes: [],
      isClick: false,
  };

  loadWisdomHandler() {
      let isClick = this.state.isClick;
      isClick = true;
      this.setState({isClick});
      return (
          fetch('https://api.icndb.com/jokes/random/').
          then(res => res.json()).
          then(ans => {
              let arrJokes = this.state.arrJokes.slice();
              arrJokes.unshift(ans.value.joke);
              this.setState({arrJokes});
          })
      );
  }
  render(){
    return(
        <div className='App'>
            <p className='Title'>{this.state.title}</p>
            <Button loadWisdom = {()=>this.loadWisdomHandler()}/>
            <Wisdom textWisdom = {this.state.arrJokes[0]}
                    isClick = {this.state.isClick}
            />
            <WisdomList arrWisdom = {this.state.arrJokes}
                        isClick = {this.state.isClick}
            />
        </div>
    )
  }
}

export default App;
