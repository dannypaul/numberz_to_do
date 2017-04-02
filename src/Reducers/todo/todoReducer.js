import initialState from './todoInitialState'

export default function todo(todoState = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO_ITEM':

            let newList = [...todoState.todoList, { toDoDescription: action.data, toDoStatus: 'INCOMPLETE' }]          
            return Object.assign({}, todoState, { todoList: newList })


        case 'REMOVE_TODO_ITEM':
            let newListRemoved = [...todoState.todoList.slice(0, action.data), ...todoState.todoList.slice(action.data + 1)]
            return Object.assign({}, todoState, { todoList: newListRemoved })

        case 'COMPLETED_TODO':
            let newListCompleted = [...todoState.todoList]
            newListCompleted[action.data].toDoStatus = (newListCompleted[action.data].toDoStatus === 'INCOMPLETE') ? 'COMPLETE' : 'INCOMPLETE'
            return Object.assign({}, todoState, { todoList: newListCompleted })


        case 'GET_TODO_LIST':
            break;



        default:
            return todoState
    }
}