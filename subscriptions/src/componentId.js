import React from 'react';

let id = 0;

export const ComponentIdContext = React.createContext(undefined);
export const getComponentId = () => id++;
