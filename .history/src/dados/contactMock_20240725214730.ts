// src/mocks/contactsMock.ts
import { Contact } from '../types/Contact';

const contactsMock: Contact[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '987-654-3210'
  },
  {
    id: 3,
    name: 'Emily Johnson',
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
