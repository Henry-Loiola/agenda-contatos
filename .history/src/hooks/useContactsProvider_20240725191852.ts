// src/hooks/useContactsProvider.ts
import { useEffect, useState } from 'react';
import useRequests from './useRequests';
import useGlobal from './useGlobal';

export interface Contact {
  id: number;
  name: string;
  email: string;
  // Adicione outros campos necessários
}

export interface ContactsProviderType {
  allContacts: Contact[];
  loadContactsData: () => Promise<void>;
}

const useContactsProvider = (): ContactsProviderType => {
  const requests = useRequests();
  const [allContacts, setAllContacts] = useState<Contact[]>([]);
  const { token } = useGlobal();

  useEffect(() => {
    if (token) {
      loadContactsData();
    }
    // eslint-disable-next-line
  }, [token]);

  const loadContactsData = async () => {
    const result = await requests.get<Contact[]>('contatos');
    setAllContacts(result);
  };

  return {
    allContacts,
    loadContactsData
  };
}

export default useContactsProvider;
