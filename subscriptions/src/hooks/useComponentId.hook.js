import { useMemo } from 'react';

let _id = 0;

export default (update = false) => {
  if (update) {
    _id++;
  }

  const id = useMemo(() => {
    console.log('useComponentId::useMemo()');
    return _id;
  }, []);

  return id;
};
