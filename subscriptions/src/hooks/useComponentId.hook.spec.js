import React from 'react';
import { mount } from 'enzyme';
import useComponentId, { issueNewId, resetId } from './useComponentId.hook';

describe('useComponentId hook', () => {
  let wrapper;

  afterEach(() => {
    wrapper = null;
    resetId();
  });

  test("returns the same id until 'issueNewId' function is called", () => {
    const App = props => {
      const id1 = useComponentId();
      const id2 = useComponentId();

      return (
        <React.Fragment>
          <div>{id1}</div>
          <div>{id2}</div>
        </React.Fragment>
      );
    };

    wrapper = mount(<App />);
    const divs = wrapper.find('div');

    expect(divs.at(0).html()).toEqual(divs.at(1).html());
  });

  test("returns new id once 'issueNewId' function is called", () => {
    const App = props => {
      const id1 = useComponentId();
      const id2 = useComponentId();
      issueNewId();
      const id3 = useComponentId();

      return (
        <React.Fragment>
          <div>{id1}</div>
          <div>{id2}</div>
          <div>{id3}</div>
        </React.Fragment>
      );
    };

    wrapper = mount(<App />);
    const divs = wrapper.find('div');

    expect(divs.at(0).html()).toEqual(divs.at(1).html());
    expect(divs.at(0).html()).not.toEqual(divs.at(2).html());
  });

  test('returns the same id being nested in other hooks', () => {
    const theOtherHook = () => useComponentId();

    const App = props => {
      const id1 = useComponentId();
      const id2 = theOtherHook();

      return (
        <React.Fragment>
          <div>{id1}</div>
          <div>{id2}</div>
        </React.Fragment>
      );
    };

    wrapper = mount(<App />);
    const divs = wrapper.find('div');

    expect(divs.at(0).html()).toEqual(divs.at(1).html());
  });
});
