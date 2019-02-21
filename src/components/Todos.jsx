import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return (
        this.props.todos.map(
            todo => <TodoItem key={todo.id} todo={todo} markToggle={this.props.markToggle} deleteTodo={this.props.deleteTodo} />
        )
    );
  }
}

//PropTypes
Todos.propTypes = {
  todos : PropTypes.array.isRequired
}

export default Todos;
