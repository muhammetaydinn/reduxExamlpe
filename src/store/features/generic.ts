// import {
//   PayloadAction,
//   SliceCaseReducers,
//   ValidateSliceCaseReducers,
//   createSlice,
// } from '@reduxjs/toolkit';
// ///BU kod
// interface GenericState<T> {
//   data?: T;
//   status: 'loading' | 'finished' | 'error';
// }

// const createGenericSlice = <
//   T,
//   Reducers extends SliceCaseReducers<GenericState<T>>,
// >({
//   name = '',
//   initialState,
//   reducers,
// }: {
//   name: string;
//   initialState: GenericState<T>;
//   reducers: ValidateSliceCaseReducers<GenericState<T>, Reducers>;
// }) => {
//   return createSlice({
//     name,
//     initialState,
//     reducers: {
//       start(state) {
//         state.status = 'loading';
//       },
//       /**
//        * If you want to write to values of the state that depend on the generic
//        * (in this case: `state.data`, which is T), you might need to specify the
//        * State type manually here, as it defaults to `Draft<GenericState<T>>`,
//        * which can sometimes be problematic with yet-unresolved generics.
//        * This is a general problem when working with immer's Draft type and generics.
//        */
//       success(state: GenericState<T>, action: PayloadAction<T>) {
//         state.data = action.payload;
//         state.status = 'finished';
//       },
//       ...reducers,
//     },
//   });
// };

// export const wrappedSlice = createGenericSlice({
//   name: 'test',
//   initialState: {
//     status: 'loading',
//     data: {
//       name: 'test',
//       age: 12,
//       counter: 0,
//     },
//   } as GenericState<Test>,
//   reducers: {
//     magic(state) {
//       state.status = 'finished';
//       state.data!.counter += 1;
//       state.data!.name = 'test';
//     },
//   },
// });
// interface Test {
//   counter: number;
//   name: string;
//   age: number;
// }
