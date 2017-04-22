import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

class FinishedTodo extends React.Component {

  changeCheck(task) {
    this.props.checkbox(task);
  }

  delete(task) {
    this.props.delete(task);
  }

  render() {
    return (
      <div className="list-finished">
        <h3>Finished List to do:</h3>
        <CSSTransitionGroup
          component="ul"
          transitionName="finish"
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}
        >
          {
            this.props.finished.map( task => {
              return (
                <li key={`${task.num_task}-passive`}>
                  <span>{task.num_task}.</span>
                  <p>
                    {task.text}
                  </p>
                    <input type="checkbox" readOnly checked onClick={ () => this.changeCheck.bind(this)(task) } />
                    <button onClick={() => this.delete.bind(this)(task) }>delete</button>
                </li>
              )
            })
          }
        </CSSTransitionGroup >
      </div>
    )
  }
}

export default FinishedTodo;