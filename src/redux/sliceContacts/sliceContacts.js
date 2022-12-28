import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Vlad', number: '30948263846' },
  { id: 'id-2', name: 'Igor', number: '30948262345' },
  { id: 'id-3', name: 'Vova', number: '30234857235' },
];

const sliceContacts = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        // return [...state, action.payload];
        state.push(action.payload);
      },
      prepare(name, number) {
        return { payload: { id: nanoid(), name: name, number: number } };
      },
    },

    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = sliceContacts.actions;
export const contactReducer = sliceContacts.reducer;
