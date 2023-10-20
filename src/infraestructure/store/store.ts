import { configureStore, combineReducers, applyMiddleware, createStore, AnyAction, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { userReducer, authReducer, categoryReducer } from './reducers';

const rootReducers = combineReducers({
  userReducer,
  authReducer,
  categoryReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});

export const wrapper = createWrapper(()=> store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;