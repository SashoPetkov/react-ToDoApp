import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

class ActiveTodo extends React.Component {

  isChecked(task) {
    this.props.checkbox(task);
  }


  render() {
    // console.log(this.props.activeTask);
    return (
      <div className="list-active">
        <h3>Active task to do:</h3>
        <CSSTransitionGroup
          component="ul"
          transitionName="active"
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}
        >
          {
            this.props.activeTask.map( task => {
              return (
                <li key={`${task.num_task}-active`} >
                  <span>{task.num_task}.</span>
                  <p>
                    {task.text}
                  </p>
                  <input type="checkbox" onChange={ () => this.isChecked.bind(this)(task) }/>
                </li>
              );
            })
          }
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default ActiveTodo;
// checked={task.finished}