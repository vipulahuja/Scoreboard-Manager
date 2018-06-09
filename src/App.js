import React from 'react';
import './App.css';
import Player from './components/Player';
import Header from './components/Header';
import AddPlayerForm from './components/AddPlayerForm';





  class App extends React.Component{
    state = {
           players: [
            {
              name: "Jim Hoskins",
              score: 31,
              id: 1,
            },
            {
              name: "Andrew Chalkley",
              score: 35,
              id: 2,
            },
            {
              name: "Alena Holligan",
              score: 42,
              id: 3,
            },
          ],
           nextId:4
    }
    
    onScoreChange = (index, delta)=>{
      this.state.players[index].score += delta;
      this.setState(this.state);
    }
      
    onPlayerAdd = (name) =>{
      this.state.players.push({
        name: name,
        score: 0,
        id:this.state.nextId,
      });
      this.state.nextId = this.state.nextId +1;
      this.setState(this.state);
    }
      
    onRemovePlayer = (index) => {
      this.state.players.splice(index, 1);
      this.setState(this.state);
    }
    
    render(){
      return (
        <div className="scoreboard">
          <Header title={this.props.title} players={this.state.players} />
        
          <div className="players">
            {this.state.players.map(function(player, index) {
              return (
                <Player 
                  onScoreChange={function(delta) {this.onScoreChange(index ,delta)}.bind(this)}
                  onRemove={function() {this.onRemovePlayer(index)}.bind(this)}
                  name={player.name} 
                  score={player.score} 
                  key={player.id} />
              );
            }.bind(this))}
          </div>
          <AddPlayerForm onAdd={this.onPlayerAdd} />
        </div>
      );
    }
    
} 

 
 
export default App;
