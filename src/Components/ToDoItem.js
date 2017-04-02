import React, { Component, PropTypes } from 'react';



export default class ToDoItem extends Component {
    static propTypes = {
        removeHandler: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        statusHandler: PropTypes.func.isRequired
    }

    render() {

        let but = this.props.item.toDoStatus === 'INCOMPLETE' ? 'off' : 'on'

        return (
            <div style={{ background: "#eee", padding: "20px", margin: "20px" }}>
                <div style={{ background: "#eee", padding: "5px", margin: "5px", fontSize: 14, textDecoration: this.props.item.toDoStatus === 'INCOMPLETE' ? '' : 'line-through' }}>{this.props.index + 1}){this.props.item.toDoDescription} </div>
                <button style={{ margin: "10px" }} onClick={() => { this.props.removeHandler(this.props.index) }}>
                    Remove ToDo
                </button>
                <input style={{ margin: "10px" }} type="checkbox" onChange={() => { this.props.statusHandler(this.props.index) }} checked={this.props.item.toDoStatus === 'INCOMPLETE' ? '' : 'checked'}/>
            </div>


        )
    }
}