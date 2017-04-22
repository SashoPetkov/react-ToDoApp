import React from "react";

class CreateTodo extends React.Component {

  constructor(props) {
    super(props);
    let num = this.props.state.length + 1;
    this.state = {
      num_task: num
    }
  }

  submitTodo(event) {
    event.preventDefault();

    if(this.nameTodo.value !== "") {

      this.setState({ num_task: (this.state.num_task + 1) });
      const newTodo = {
        num_task: this.state.num_task,
        text: this.nameTodo.value,
        finished: false
      };
      // console.log(newTodo);
      this.props.addTodo(newTodo);
      this.nameTodo.value = "";

    }
  }

  render() {
    return (
      <div className="crateTodo">
        <h3>Create new to do now:</h3>
        <form onSubmit={ this.submitTodo.bind(this) }>
          <input type="text" ref={ todo => this.nameTodo = todo }/>
          <button type="submit">+ADD</button>
        </form>
      </div>
    )
  }
}

export default CreateTodo;