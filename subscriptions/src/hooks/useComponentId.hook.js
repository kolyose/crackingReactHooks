import { useMemo } from 'react';

let _id = 0;

export default (update = false) => {
  if (update) {
    _id++;
  }

  return useMemo(() => _id, []);
};
