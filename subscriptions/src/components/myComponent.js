import React, { useState, useEffect } from 'react';
import useComponentId from '../hooks/useComponentId.hook';
import useSubscriptions from '../hooks/useSubscriptions.hook';

const MyComponent = ({ sources }) => {
  const [issueNewId, setIssueNewId] = useState(true);
  const id = useComponentId(issueNewId);

  const [subscriptions, updateSubscriptions] = useState(
    sources.map(source => useSubscriptions(source)),
  );

  useEffect(() => {
    if (issueNewId) setIssueNewId(false);
  }, []);

  return (
    <div>
      <h1>{`Component ${id}`}</h1>
      <p>
        Subscribed to:{' '}
        {subscriptions.reduce((list, { source }) => list.concat(source).concat(','), '')}
      </p>
      {subscriptions.map(({ source, unsubscribe }, index) => (
        <button
          key={index}
          onClick={() => {
            unsubscribe();
            updateSubscriptions(subscriptions.filter((sub, i) => index !== i));
          }}
        >
          {`Unsubscribe from ${source}`}
        </button>
      ))}
    </div>
  );
};

export default MyComponent;
