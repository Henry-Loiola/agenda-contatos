// src/context/GlobalContext.tsx
import React, { createContext, ReactNode } from 'react';
import useGlobalProvider, { GlobalProviderType } from '../hooks/useGlobalProvider';

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext<GlobalProviderType | undefined>(undefined);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const globalProvider = useGlobalProvider();

  return (
    <GlobalContext.Provider value={globalProvider}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
