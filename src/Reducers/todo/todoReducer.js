import initialState from './todoInitialState'

export default function todo(todoState = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO_ITEM':
            let newList = [...todoState.todoList, action.data]
            return Object.assign({}, todoState, { todoList: newList })

        case 'REMOVE_TODO_ITEM':
            break;

        case 'GET_TODO_LIST':
            break;

        default:
            return todoState
    }
}