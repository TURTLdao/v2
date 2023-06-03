import React, { createContext, useState } from 'react';

// Create the context
export const AppStateContext = createContext();

// Create the provider component
export const AppStateProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState('');

  return (
    <AppStateContext.Provider value={{ walletAddress, setWalletAddress }}>
      {children}
    </AppStateContext.Provider>
  );
};
