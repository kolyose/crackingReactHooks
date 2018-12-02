import { useContext } from 'react';
import { ComponentIdContext } from '../componentId';

export default () => {
  const id = useContext(ComponentIdContext);
  return id;
};
