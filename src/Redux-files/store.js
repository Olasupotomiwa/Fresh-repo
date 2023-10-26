import { configureStore } from '@reduxjs/toolkit';
import linkedReducer from './slices/linkedslice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use localStorage
import authReducer from './slices/authSlice';

const persistConfig = {
  key: 'root',
  storage, // Use localStorage
  timeout: null,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedLinkedReducer = persistReducer(persistConfig, linkedReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    linked: persistedLinkedReducer,
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
