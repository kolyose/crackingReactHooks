import { useState } from 'react';

let _id = 0;

export const issueNewId = () => {
  _id++;
};

export default () => {
  const [id] = useState(_id);
  return id;
};
