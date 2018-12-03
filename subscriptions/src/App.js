import React, { Component } from 'react';
import MyComponent from './components/myComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent />
        <MyComponent />
        <MyComponent />
      </div>
    );
  }
}

export default App;
