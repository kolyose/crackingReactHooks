import React, { Component } from 'react';
import MyComponent from './components/myComponent';
import { ComponentIdContext, getComponentId } from './componentId';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentIdContext.Provider value={getComponentId()}>
          <MyComponent />
        </ComponentIdContext.Provider>
        <ComponentIdContext.Provider value={getComponentId()}>
          <MyComponent />
        </ComponentIdContext.Provider>
      </div>
    );
  }
}

export default App;
