import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
// import shuffle from "shuffle"


class App extends Component {
  state = {
    friends,
    score: 0,
    highScore: 0,
    clickedArray: []
  };
  handleClick = id => {
    const shuffledArray = this.shuffleArray(friends);
    this.setState({ friends: shuffledArray });
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [] });
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
      });
    }
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score });
    }
  };
  shuffleArray = (picturesArray) => {
    for (let i = picturesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
    }
    return picturesArray;
  }
  // shuffleArray= () => {
  //   shuffle(this.state)
  //   this.setState({ friends });


  render() {
    return (
      <Wrapper>
        <Title
          score={this.state.score}
          highScore={this.state.highScore}
        />

        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
