import useComponentId from './useComponentId.hook';

let subscriptionsByComponentId = {};

export default source => {
  if (!source) return;
  console.log('useSubscriptions()');
  const id = useComponentId();
  console.log(`id: ${id}`);

  if (!subscriptionsByComponentId[id]) {
    subscriptionsByComponentId[id] = new Set();
  }

  subscriptionsByComponentId[id].add(source);

  return subscriptionsByComponentId[id];
};
