import React, { Component } from 'react';
import Home from './Containers/Home'
import { Provider } from 'react-redux'
import todoState from './Reducers/todo/todoInitialState'
import configureStore from './configureStore'

class App extends Component {

  getStoreState = () => {
    return {
      todo: todoState
    }
  }

  render() {
    const store = configureStore(this.getStoreState())
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
