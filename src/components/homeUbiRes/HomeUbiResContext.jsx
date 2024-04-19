import React, { createContext, useContext, useState } from 'react';

export const HomeUbiResContext = createContext();

/* export const contextoProvider = ({ children }) => {
  const [ciudad, setCiudad] = useState('');

  return (
    <HomeUbiResContext.Provider value={{ ciudad, setCiudad }}>
      {children}
    </HomeUbiResContext.Provider>
  );
};

export const useMiContexto = () => useContext(HomeUbiResContext); */