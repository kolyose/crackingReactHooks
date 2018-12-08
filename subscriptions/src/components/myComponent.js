import React from 'react';
import useComponentId, { issueNewId } from '../hooks/useComponentId.hook';
import useSubscriptions from '../hooks/useSubscriptions.hook';

const MyComponent = ({ sources }) => {
  issueNewId();

  const id = useComponentId();

  let subscriptions;
  sources.forEach(source => {
    subscriptions = useSubscriptions(source);
  });

  return (
    <div>
      <h1>{`Component ${id}`}</h1>
      <p>
        Subscribed to:
        {Array.from(subscriptions)}
      </p>
    </div>
  );
};

export default MyComponent;
