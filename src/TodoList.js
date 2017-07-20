import React, { Component } from 'react';
import Panel from './Panel';
import Optionen from './Optionen';

class TodoList extends Component {

    render(){
        return (
        <Panel titel="ToDos">
          <ul className="App-todo">
              {this.props.todos.map(function(todo) {
                return (
                  <li key={todo.id}><Optionen ids={todo.id}/>{todo.id}: {todo.title}</li>
                )
              })}
          </ul>
        </Panel>
        )
    }

}

TodoList.propTypes = {
  /** Titel vom Panel */
  //todos: React.PropTypes.array.isRequired
  // Oder besser
  todos: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired
    })
  ).isRequired
}

export default TodoList;