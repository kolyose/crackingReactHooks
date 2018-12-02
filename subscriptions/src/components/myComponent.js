import React, { useState } from 'react';
import useComponentId from '../hooks/useComponentId.hook';
import useSubscriptions from '../hooks/useSubscriptions.hook';

const MyComponent = () => {
  const id = useComponentId();
  const [input, setInput] = useState('');
  const [subscriptions, setSubscriptions] = useState('');
  const { addSubscription, removeSubscription, getSubscriptions } = useSubscriptions();

  function updateSubscriptions() {
    setSubscriptions(getSubscriptions());
  }

  return (
    <div>
      <h1>{`Component ${id}`}</h1>
      <p>Subscribed to: {subscriptions}</p>
      <input
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addSubscription(input);
          updateSubscriptions();
          setInput('');
        }}
      >
        Subscribe
      </button>
      <button
        onClick={() => {
          removeSubscription(input);
          updateSubscriptions();
          setInput('');
        }}
      >
        Unsubscribe
      </button>
    </div>
  );
};

export default MyComponent;
