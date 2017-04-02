import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodoItem, removeToDoItem, completedToDoItem } from '../Reducers/todo/todoActions'
import TodoInput from '../Components/TodoInput'
import ToDoItem from '../Components/ToDoItem'


function mapStateToProps(state) {
    return {
        todoList: state.todo.todoList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ addTodoItem, removeToDoItem, completedToDoItem }, dispatch)
    }
}

class Home extends Component {

    render() {
        return (
            <div>
                <div>Awesome ToDo</div>
                <TodoInput submitToDoHandler={this.props.actions.addTodoItem} />
                {
                    this.props.todoList.map((item, index) => {

                        return (
                            <div key={index}>
                                <ToDoItem removeHandler={this.props.actions.removeToDoItem} statusHandler={this.props.actions.completedToDoItem} item={item} index={index} />
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)