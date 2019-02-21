import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import axios from 'axios';

class App extends Component {

  state = {
    todos:[
            { id:uuid.v4(), title:"Dinner with Friend", completed:false },
            { id:uuid.v4(), title:"Go To Bed", completed:false },
            { id:uuid.v4(), title:"Feeeling tired ...:(((((", completed:false }
          ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(
          res => console.log(res.data) 
          // res => this.setState({ todos: res.data }) 
        )
  }

  markToggle = (id) => {
    this.setState({
      todos: this.state.todos.map( todo => { 
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
       })
    })  
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [ ...this.state.todos.filter( todo =>  todo.id !== id ) ]
    })  
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>    
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markToggle={this.markToggle} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )}/>
          <Route path="/about" render={props => (
            <React.Fragment>    
              <About />
            </React.Fragment>
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
