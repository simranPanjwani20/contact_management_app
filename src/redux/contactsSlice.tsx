import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: 'active' | 'inactive';
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<number>) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      },
      editContact: (state, action: PayloadAction<Contact>) => {
        const { id, firstName, lastName, status } = action.payload;
        const contactToUpdate = state.contacts.find(contact => contact.id === id);
        if (contactToUpdate) {
          contactToUpdate.firstName = firstName;
          contactToUpdate.lastName = lastName;
          contactToUpdate.status = status;
        }
      }
  },
});

export const { addContact, editContact,deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
