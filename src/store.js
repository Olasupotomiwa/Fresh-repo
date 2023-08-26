// store.js
import { configureStore } from '@reduxjs/toolkit';
import linkedReducer from './slices/linkedslice';

import { persistStore, persistReducer,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';

import storageSession from 'redux-persist/lib/storage/session'; 
import authReducer from './slices/authSlice';

const persistConfig = {
  key: 'root',
  storage: storageSession, // Use sessionStorage
  timeout: null,
 
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    linked: linkedReducer,
   
    // Add other slices here
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
