import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTodoText: "",
    };
  }
  handleChanges = (e) => {
    this.setState({
      newTodoText: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // do something (this.props.addTodo)
    this.props.addTodo(this.state.newTodoText);
    this.setState({
      newTodoText: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label forHtml="newTodo">
            Add new todo item
            <input
              id="newTodo"
              value={this.state.newTodoText}
              onChange={this.handleChanges}
            />
          </label>
          <button>Add todo</button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
