import React, { Component } from 'react';
import TodoList from './TodoList';
import AddButton from './AddButton';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
  
    this.state = {
      todos: [
        {id: 1, title: "Einkaufen"},
        {id: 2, title: "Reacten"},
        {id: 3, title: "Coden"},
        {id: 4, title: "Evtl. noch was Reduxen"},
        {id: 5, title: "Noch was tolles, wie z. B. Maria DB kennelernen"}
      ]
    }

   this.addTodo = this.addTodo.bind(this);

  }

  addTodo(titel){

    let todos = this.state.todos;
    let maxId = 0;
    
    for(let todo of todos){
      if(todo.id > maxId){
        maxId = todo.id;
      }
    }
    
    todos.push({ id:(maxId + 1), title: titel });

    this.setState({
      todos: todos 
    })

  }

  render() {
   
    return (
      <div className="App">
          <h1>Meine ToDo App</h1>
          <TodoList todos={this.state.todos}/>
          <AddButton onAdd={this.addTodo} />
      </div>
    );
  }
}

export default App;
