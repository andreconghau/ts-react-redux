import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './features/UserSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import UserThunkSlice from './features/UserThunkSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    userThunk: UserThunkSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
