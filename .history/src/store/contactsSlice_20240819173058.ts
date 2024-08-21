import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../types/Contacts';

interface ContactsState {
  contactsList: Record<string, Contact>;
}

const initialState: ContactsState = {
  contactsList: {},
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      const { id, name, email, phone } = action.payload;
      state.contactsList[id] = { id, name, email, phone };
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const { id, name, email, phone } = action.payload;
      if (state.contactsList[id]) {
        state.contactsList[id] = { ...state.contactsList[id], name, email, phone };
      }
    },
    removeContact: (state, action: PayloadAction<{ id: string }>) => {
      delete state.contactsList[action.payload.id];
    },
  },
});

export const { addContact, updateContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
