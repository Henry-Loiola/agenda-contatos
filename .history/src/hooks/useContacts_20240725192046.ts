// src/hooks/useContacts.ts
import { useContext } from 'react';
import ContactsContext from '../context/ContactsContext';
import { ContactsProviderType } from './useContactsProvider';

const useContacts = (): ContactsProviderType => {
  const context = useContext(ContactsContext);

  if (context === undefined) {
    throw new Error('useContacts must be used within a ContactsProvider');
  }

  return context;
};

export default useContacts;
