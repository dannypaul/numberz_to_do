import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodoItem } from '../Reducers/todo/todoActions'
import TodoInput from '../Components/TodoInput'


function mapStateToProps(state) {
    return {
        todoList: state.todo.todoList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ addTodoItem }, dispatch)
    }
}


class Home extends Component {

    render() {
        return (
            <div>
                <p>Awesome ToDo</p>
                <TodoInput submitToDoHandler={this.props.actions.addTodoItem} />
                {
                    this.props.todoList.map((item, index) => {
                        return (
                            <p key={index}>
                                {item}
                            </p>
                        );
                    })
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)