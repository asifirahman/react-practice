//This file is just for learning purpose
//Trying to learn Class Based Components
import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props); //Why it is written
    this.state = {
      count1: 1,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timer = setInterval(() => {
      console.log("ASIF");
    }, 1000);
  }

  //such a painful experience for old developers
  componentDidUpdate(prevProp, prevState) {
    console.log("componentDidUpdate:", prevState.count1, this.state.count1);
  }

  //always use this for cleaning up
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        <h1>Count 1 : {this.state.count1}</h1>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increase count
        </button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h4>Contact: 7980144539</h4>
      </div>
    );
  }
}

export default User;
