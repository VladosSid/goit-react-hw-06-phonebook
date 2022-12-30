import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import { contactReducer } from './sliceContacts/sliceContacts';
import { filterReducer } from './sliceFilter/sliceFilter';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
