import { useState } from 'react';

let _id;
resetId();

export function issueNewId() {
  _id++;
}

export function resetId() {
  _id = 0;
}

export default () => {
  const [id] = useState(_id);
  return id;
};
