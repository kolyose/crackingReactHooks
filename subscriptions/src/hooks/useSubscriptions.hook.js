import useComponentId from './useComponentId.hook';

let subscriptionsByComponentId = {};

export default source => {
  if (!source) return;
  console.log('useSubscriptions()');
  const id = useComponentId();

  if (!subscriptionsByComponentId[id]) {
    subscriptionsByComponentId[id] = new Set();
  }

  subscriptionsByComponentId[id].add(source);

  return {
    source,
    unsubscribe: () => {
      subscriptionsByComponentId[id].delete(source);
      return subscriptionsByComponentId[id];
    },
  };
};
