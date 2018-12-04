import React, { Component } from 'react';
import MyComponent from './components/myComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.ConcurrentMode>
          <MyComponent sources={['A', 'B', 'C']} />
        </React.ConcurrentMode>
      </div>
    );
  }
}

export default App;
