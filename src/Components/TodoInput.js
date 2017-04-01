import React, { Component, PropTypes } from 'react';

export default class Home extends Component {

    state = {
        todoDescription: '',
    }

    static propTypes = {
        submitToDoHandler: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div>
                <input type={'text'} onChange={(event) => { this.setState({ todoDescription: event.target.value }) }} />
                <button style={{ width: '100px', height: '20px' }} onClick={() => this.props.submitToDoHandler(this.state.todoDescription)}>
                    Add ToDo
                </button>
            </div>

        )
    }
}