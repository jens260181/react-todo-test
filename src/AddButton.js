import React, { Component } from 'react';
import Panel from './Panel';
import './AddButton.css';

class AddButton extends Component {

     constructor(props){
        super(props);

        this.onTodoAdd = this.onTodoAdd.bind(this);
        this.onTodoChange = this.onTodoChange.bind(this);

        this.state = {
            newTodo : ''
        }

    }
    onTodoAdd() {
        this.props.onAdd(this.state.newTodo);
        this.setState({
            newTodo : ''
        })
    }

    onTodoChange(event){
        this.setState({
            newTodo: event.target.value
        })
    }

    render(){

        let btn = null;
        let ButtonStyle = {
            backgroundColor: (this.state.newTodo.length < 3 ? "red" : "green")
        }

        if(this.state.newTodo !== ''){
            (
                btn = <button onClick={this.onTodoAdd} style={ButtonStyle} className="btn">ToDo Hinzufügen</button>
            );
        }

        return (
            <Panel titel="Neues ToDo hinzufügen">
                <label>Mindestens 3 Zeichen eingeben.</label>
                <br/>
                <input type="text" onChange={this.onTodoChange} value={this.state.newTodo} className="input" placeholder="Ein ToDo was ich noch erledigen muss!!"/><br/>
                {btn}
            </Panel>
        )
    }

}

AddButton.propTypes = {
    onAdd : React.PropTypes.func.isRequired
}

export default AddButton;