import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PERSIST, REHYDRATE } from 'redux-persist/es/constants';
import { moviesApi } from '../services/moviesApi.ts';
import favouriteMoviesReducer from './slices/favouriteMoviesSlice.ts';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  favouriteMovies: favouriteMoviesReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REHYDRATE],
      },
    }).concat(moviesApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
