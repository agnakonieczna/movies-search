import {
  combineReducers,
  configureStore,
  EnhancedStore,
} from '@reduxjs/toolkit';
import {
  PERSIST,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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

export function setupStore(preloadedState?: Partial<RootState>): EnhancedStore {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [PERSIST, REHYDRATE],
        },
      }).concat(moviesApi.middleware),
  });
}

export const store = setupStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
