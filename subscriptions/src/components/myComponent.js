import React, { useState, useLayoutEffect } from 'react';
import useComponentId, { issueNewId } from '../hooks/useComponentId.hook';
import useSubscriptions from '../hooks/useSubscriptions.hook';

const MyComponent = ({ sources }) => {
  // it's a bad idea to call the function here since it would be called on each render
  // issueNewId();

  // putting it into the useState initializer instead
  // guarantees it's going to be called only once
  const [id, setId] = useState(issueNewId);
  const componentId = useComponentId();

  let subscriptions;
  sources.forEach(source => {
    // the hook is called within a loop intentionally - to see how would React engine handle such a case
    // by the version 16.7.0-alpha.2 it shows no console errors
    subscriptions = useSubscriptions(source);
  });

  // not just a useEffect here in order to avoid initial flickering of the id being rendered
  useLayoutEffect(() => {
    setId(componentId);
  }, []);

  // just an irrelevant mechanism to force a re-render to check if the id remains the same
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <h1>{`Component ${id}`}</h1>
      <p>
        Subscribed to:
        {Array.from(subscriptions)}
      </p>
    </div>
  );
};

export default MyComponent;
