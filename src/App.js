import React, { Component } from 'react';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ItemListContainer />
      </div>
    );
  }
}

export default App;