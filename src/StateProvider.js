//setup data layer
//track the basket

import React, { createContext, useContext } from "react";
import { useReducer } from "react";

// this is the data layer
export const StateContext = createContext();

//build a provider
//children is referring to the App which is a child
// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is how we use it inside of a component
// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
