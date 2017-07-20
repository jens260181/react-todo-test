import React, { Component } from 'react';

class Optionen extends Component {
    
    constructor(props){
    
        super(props);

        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);

    }

    onEdit(){
      alert('Eintrag: '+this.props.ids+' kann bald bearbeitet werden');
    }
    onDelete(){
        alert("ToDo Nummer: "+this.props.ids+" ist erledigt. Super :-)");
    }
    render(){
        return (
            
            <span className="klasse">
                <span className="pointer option" value={this.props.ids} onClick={this.onEdit.bind(this.props.ids)}>[E]</span>
                <span className="pointer option" value={this.props.ids} onClick={this.onDelete.bind(this.props.ids)}>[X]</span>
            </span>
        )
    }

}

export default Optionen;