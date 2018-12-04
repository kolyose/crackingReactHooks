import React, { useState, useEffect } from 'react';
import useComponentId from '../hooks/useComponentId.hook';
import useSubscriptions from '../hooks/useSubscriptions.hook';

const MyComponent = ({ sources }) => {
  console.log('<MyComponent/>');

  const [issueNewId, setIssueNewId] = useState(true);
  const id = useComponentId(issueNewId);
  console.log(`id: ${id}`);

  let subscriptions;
  sources.forEach(source => {
    subscriptions = useSubscriptions(source);
  });
  console.log(`subscriptions: ${Array.from(subscriptions)}`);

  useEffect(() => {
    console.log('useEffect()');
    if (issueNewId) setIssueNewId(false);
  }, []);

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
