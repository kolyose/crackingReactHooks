import React, { Component } from 'react';
import MyComponent from './components/myComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent sources={['A', 'B', 'C']} />
        <MyComponent sources={[1, 2, 3]} />
      </div>
    );
  }
}

export default App;
