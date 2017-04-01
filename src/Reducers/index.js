import todo from './todo/todoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo
})

export default rootReducer