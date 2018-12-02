import useComponentId from './useComponentId.hook';

let subscriptionsByComponentId = {};

const add = id => source => {
  if (!source) return;
  if (!subscriptionsByComponentId[id]) {
    subscriptionsByComponentId[id] = new Set();
  }

  subscriptionsByComponentId[id].add(source);
};

const remove = id => source => {
  if (!source) return;
  if (subscriptionsByComponentId[id]) {
    subscriptionsByComponentId[id].delete(source);
  }
};

const get = id => () =>
  subscriptionsByComponentId[id] ? Array.from(subscriptionsByComponentId[id]).join(',') : '';

export default () => {
  const id = useComponentId();

  return {
    addSubscription: add(id),
    removeSubscription: remove(id),
    getSubscriptions: get(id),
  };
};
