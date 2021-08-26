import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

//Initial State

const initialState = {
  images: [],
  isLoading: true,
};

//Create Context

export const GlobalContext = createContext(initialState);

//Creating provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const fetchImages = (images) => {
    dispatch({
      type: "DATA_FETCHED",
      payload: images,
    });
  };

  return (
    <GlobalContext.Provider value={{ init: state, fetchImages }}>
      {children}
    </GlobalContext.Provider>
  );
};
