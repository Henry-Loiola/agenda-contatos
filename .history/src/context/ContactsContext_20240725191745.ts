import React, { createContext, ReactNode } from 'react';
import useContactsProvider, { ContactsProviderType } from '../hooks/useContactsProvider';

interface ContactsProviderProps {
  children: ReactNode;
}

const ContactsContext = createContext<ContactsProviderType | undefined>(undefined);

export const ContactsProvider: React.FC<ContactsProviderProps> = ({ children }) => {
  const contactsProvider = useContactsProvider();

  return (
    <ContactsContext.Provider value={contactsProvider}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContext;
