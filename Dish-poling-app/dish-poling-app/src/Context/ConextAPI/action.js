import React, { createContext, useEffect, useReducer } from 'react';
import DishReducer from '../Reducers/DishReducer';
import PollReducer from '../Reducers/PollReducer';

export const Context = createContext();

const fetchFunction = () => {
  return fetch(
    'https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json'
  ).then((res) => res.json());
};

const ContextProvider = ({ children }) => {
  const [dishes, dishesDispatch] = useReducer(DishReducer, []);
  const [votes, pollesDispatch] = useReducer(PollReducer, []);

  useEffect(() => {
    fetchFunction().then((data) => {
      const dishData = dishes.slice();
      data.map((item) => {
        dishData.push({
          id: item.id,
          name: item.dishName,
          description: item.description,
          image: item.image,
          rank1: false,
          rank2: false,
          rank3: false,
        });
      });
      dishesDispatch({ type: 'ADD_DISHES', payload: dishData });
    });
  }, []);

  return (
    <Context.Provider value={{ dishes, votes, dishesDispatch, pollesDispatch }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
