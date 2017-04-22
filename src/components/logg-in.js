import React, { Component } from "react";

class LoggIn extends Component {

  submitLoggIn(event) {
    event.preventDefault();
    const name = this.name.value;
    this.props.history.push(`/home/${name}`)
  }

  render() {
    return (
      <form className="loggForm" onSubmit={ this.submitLoggIn.bind(this) }>
        <h3>Type your name to Logg-in:</h3>
        <input type="text" ref={inp => this.name = inp} />
        <button type="submit" >
          Go in To-DO home!
        </button>
      </form>
    )
  }
}

export default LoggIn;