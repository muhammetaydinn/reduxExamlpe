import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { slice1, slice2 } from "./features/generic2";

export const store = configureStore({
  reducer: {
    // person: PersonSlice,
    // counterA: createCounterWithNamedType('A'),
    // counterB: createCounterWithNamedType('B'),
    // counterC: createCounterWithNamedType('C'),
    // counterA: createNamedWrapperReducer(counter, 'A'),
    // counterB: createNamedWrapperReducer(counter, 'B'),
    // counterC: createNamedWrapperReducer(counter, 'C'),
    // wrappedSlice: wrappedSlice.reducer,
    slice1: slice1.reducer,
    slice2:slice2.reducer
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;