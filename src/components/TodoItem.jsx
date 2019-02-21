import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
 getStyle = () => {
    return { 
        backgroundColor:'#f4f4f4',
        padding:'1px',
        borderBottom:'1px dotted #ccc',
        textDecoration : this.props.todo.completed ? 'line-through' : 'none' 
    }
 }
 render() {
    const { id, title } = this.props.todo; 
    return (
        <div style={this.getStyle()} >
            <p>
                <input type="checkbox" onChange={this.props.markToggle.bind(this, id)}/>
                 { ' ' + title}
                 <button className="badge badge-danger mr-2" style={{float:'right',borderRadius:'50%'}} onClick={this.props.deleteTodo.bind(this, id)} >X</button>
            </p>
        </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo : PropTypes.object.isRequired
}

export default TodoItem;
