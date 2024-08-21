// src/hooks/useGlobalProvider.ts
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

interface UseGlobalProviderReturnType {
  openAddEditModal: boolean;
  setOpenAddEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentContact: boolean;
  setCurrentContact: React.Dispatch<React.SetStateAction<boolean>>;
  token: string; // Ensure this is always a string
  setToken: React.Dispatch<React.SetStateAction<string>>;
  removeToken: () => void;
}

const useGlobalProvider = (): UseGlobalProviderReturnType => {
  const [openAddEditModal, setOpenAddEditModal] = useState<boolean>(false);
  const [currentContact, setCurrentContact] = useState<boolean>(false);
  const [token, setToken, removeToken] = useLocalStorage<string>('token', ''); // Default to empty string

  useEffect(() => {
    if (!openAddEditModal) {
      setCurrentContact(false);
    }
  }, [openAddEditModal]);

  return {
    openAddEditModal,
    setOpenAddEditModal,
    currentContact,
    setCurrentContact,
    token: token || '', // Ensure token is always a string
    setToken,
    removeToken
  };
};

export default useGlobalProvider;
