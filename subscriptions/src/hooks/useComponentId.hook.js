import { useState } from 'react';

let _id;
resetId();

export function issueNewId() {
  _id++;
  console.log(`issued id: ${_id}`);
}

export function resetId() {
  _id = 0;
}

export default () => {
  const [id] = useState(_id);
  console.log(`returned id: ${id}`);
  return id;
};
