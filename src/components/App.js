import React, { Component } from 'react';
import CSSTransitionGroup from "react-addons-css-transition-group";

import ActiveTodo from "./active_todo";
import FinishedTodo from "./finished_todo";
import CreateTodo from "./create_todo";


class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      activeTodo: [
        {
          num_task: 1,
          text: "clean the room",
          finished: false
        },
        {
          num_task: 2,
          text: "wash the dishes",
          finished: false
        },
        {
          num_task: 3,
          text: "tidy your room",
          finished: true
        }
      ],
      show: false
    };

    this.checkBox = this.checkBox.bind(this);
    this.activeFiltered = this.activeFiltered.bind(this);
    this.finishedFiltered = this.finishedFiltered.bind(this);
    this.showCreate = this.showCreate.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  componentWillMount(){
    const localStore = localStorage.getItem(`user-${this.props.match.params.name}`);
    if(localStore) {
      this.setState({ activeTodo: JSON.parse(localStore) });
    }
  }

  componentWillUpdate(prevProps, prevState) {
    localStorage.setItem(`user-${this.props.match.params.name}`, JSON.stringify(prevState.activeTodo));
  }

  checkBox(activeTask) {
    activeTask.finished = !activeTask.finished;
    const oldState = [...this.state.activeTodo];

    this.setState({ activeTodo: oldState });
  }

  activeFiltered() {
    return this.state.activeTodo.filter( task => {
        return task ? task.finished === false : null;
    });
    // console.log(this.state.activeTodo)
  }

  finishedFiltered() {
    return this.state.activeTodo.filter( task => {
        return task ? task.finished === true : null;
    });
  }

  showCreate() {
    this.setState({ show: !this.state.show })
  }

  addTodo(todo) {
    const newState = [...this.state.activeTodo];
    newState.push(todo);
    this.setState({ activeTodo: newState });
  }

  deleteTodo(todo) {
    const removedState = [...this.state.activeTodo];
    const saveIndex = removedState.indexOf(todo);

    // removedState[saveIndex] = null;
    removedState.splice(saveIndex, 1);

    this.setState({ activeTodo:removedState })
  }

  render() {
    return (
      <main className="app">
        <button onClick={ this.showCreate }>ADD new task</button>

        <ActiveTodo
          activeTask={ this.activeFiltered() }
          checkbox={ this.checkBox }
        />
        <FinishedTodo
          finished={ this.finishedFiltered() }
          checkbox={ this.checkBox }
          delete={ this.deleteTodo }
        />
        <CSSTransitionGroup
        component="div"
        transitionName="showDiv"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        >
          {
            this.state.show ? <CreateTodo addTodo={ this.addTodo } state={this.state.activeTodo}/> : null
          }
        </CSSTransitionGroup>
      </main>
    );
  }
}

export default App;
