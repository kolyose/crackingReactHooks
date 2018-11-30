import { useState, useEffect } from 'react';
import useComponentId from './useComponentId.hook';

let subscriptionsByComponentId = {};

export default (target) => {
  const componentId = useComponentId();

  if (!subscriptionsByComponentId) {
    subscriptionsByComponentId[componentId] = {};
  }

  let subscription = subscriptionsByComponentId[componentId][target];
  if (!subscription) {
    const [data, setData] = useState({});
    const unsubscribe = () => {
      delete subscriptionsByComponentId[componentId][target];
    }
  
    subscription = [ data, unsubscribe ];
    subscriptionsByComponentId[componentId][target] = subscription;  
    
    useEffect(() => {
      // some real subscription here
      setData({ ...subscriptionsByComponentId[componentId] });
      return () => {
        // some real unsubscription here
      }
    }, [ Object.keys[subscriptionsByComponentId[componentId]].length ]);   
  }
    
  return subscription; 
}