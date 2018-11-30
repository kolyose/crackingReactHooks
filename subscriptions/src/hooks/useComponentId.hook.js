import { useContext } from 'react';
import { IdContext } from '../idFactory';


export default () => {
  const { id } = useContext(IdContext);
  return id;
}