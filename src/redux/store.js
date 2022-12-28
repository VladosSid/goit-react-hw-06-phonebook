import { configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './sliceContacts/sliceContacts';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
