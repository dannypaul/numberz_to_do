import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class TodoInput extends Component {

    state = {
        todoDescription: ''
    }

    static propTypes = {
        submitToDoHandler: PropTypes.func.isRequired,

    }

    render() {
        return (
            <div style={{ background: "#eee", padding: "10px", margin: "10px" }}>

                <input ref="toDoDescriptionInput" type={'text'} style={{ fontStyle: "italic", width: "300px", fontSize: 14, }} placeholder="What are the awesome things you want to do?" value={this.state.todoDescription} onChange={(event) => { this.setState({ todoDescription: event.target.value }) }} />

                <button disabled={!this.state.todoDescription} style={{ width: '100px', height: '20px', margin: "10px" }} onClick={() => { this.props.submitToDoHandler(this.state.todoDescription); this.setState({ todoDescription: '' }) }}>
                    Add ToDo
                </button>

            </div>

        )
    }
}