import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from './Reducers'

const logger = createLogger()

export default function configureStore(initialState) {
    let middleware = [logger]
    return createStore(reducer, initialState, applyMiddleware(...middleware))
}