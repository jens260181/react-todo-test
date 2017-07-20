import React, { Component } from 'react';

class Eingabe extends Component {

    render(){
        return (
            <form>
                <input type="text" name="neueTodo" className="input" />
            </form>
        )
    }

}

export default Eingabe;