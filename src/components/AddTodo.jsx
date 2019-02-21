import React, { Component } from 'react';

class AddTodo extends Component {
    state = { title : '' }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo( this.state.title );
        this.setState({ title : '' });
    }
    onChange = (e) => {
        this.setState({ title : e.target.value });
    }
    render() { 
        return ( 
            <form style={{display:'flex'}} onSubmit={this.onSubmit} > 
                <input type="text" name="title" placeholder="Add Todo ...." value={this.state.title} style={{flex:'10', padding:'5px'}} onChange={this.onChange} />
                <input type="submit" name="submit" className="btn btn-secondary"  style={{flex:'1'}}/>
            </form>
         );
    }
}
 
export default AddTodo;