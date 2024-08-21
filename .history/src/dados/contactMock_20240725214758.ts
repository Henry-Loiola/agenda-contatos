// src/mocks/contactsMock.ts
import { Contact } from '../types/Contacts';

const contactsMock: Contact[] = [
  {
    id: 1,
    nome: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890'
  },
  {
    id: 2,
    nome: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '987-654-3210'
  },
  {
    id: 3,
    nome: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    phone: '555-123-4567'
  },
  {
    id: 4,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    phone: '555-987-6543'
  }
];

export default contactsMock;
