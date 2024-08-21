// src/context/GlobalContext.tsx
import React, { createContext, ReactNode, useState } from 'react';

interface GlobalContextType {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <GlobalContext.Provider value={{ token, setToken }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
