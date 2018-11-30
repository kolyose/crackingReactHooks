import React from 'react';

let id=0;

export const IdContext = React.createContext({ id: undefined });
export default () => id++;