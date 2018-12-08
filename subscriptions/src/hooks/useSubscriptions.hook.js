import useComponentId from './useComponentId.hook';

let subscriptionsByComponentId = {};

export default source => {
  if (!source) return;

  const id = useComponentId();

  if (!subscriptionsByComponentId[id]) {
    subscriptionsByComponentId[id] = new Set();
  }

  subscriptionsByComponentId[id].add(source);

  return subscriptionsByComponentId[id];
};
