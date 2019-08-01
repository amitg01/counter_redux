import React, { Component } from "react";
import { connect } from "react-redux"
import "./App.css";

class App extends Component {

  handleChange = ({target: {name,value}}) => {
    this.props.dispatch({type:`${name}`,value})
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            name="name"
            placeholder="name"
            value={this.props.state.name}
            onChange={this.handleChange}
          />
          <input
            name="email"
            placeholder="email"
            value={this.props.state.email}
            onChange={this.handleChange}
          />
          <input
            name="age"
            placeholder="age"
            value={this.props.state.age}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(App);
