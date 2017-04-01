//All actions pertaining to ToDo List:

export function addTodoItem(item) {
    return { type: 'ADD_TODO_ITEM', data: item }
}

export function removeToDoItem(itemIndex) {
    return { type: 'REMOVE_TODO_ITEM', data: itemIndex }
}

export function getTodoList() {
    return { type: 'GET_TODO_LIST' }
}
