// import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// // Person interface
// export interface GenericState<T> {
//   name: string;
//   age: number;
//   data?: T[];
// }


// function createGenericSlice({sliceName, initialState}:{sliceName:string,initialState:GenericState<any>}) {
//   const fetchPerson = createAsyncThunk(`${sliceName}/fetchPerson`, async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     return data;
//   });



//   const slice = createSlice({
//     name: sliceName,
//     initialState,
//     reducers: {
//       addPerson: (state, action: PayloadAction<{name: string}>) => {
//         state.data?.push({
//           id: state.data?.length,
//           name: action.payload.name,
//         });
//       },
  
//     },
//     extraReducers: builder => {
//       builder.addCase(fetchPerson.pending, state => {
//         console.log('test thunk pending');
//       })
//         .addCase(fetchPerson.fulfilled, (state, action) => {
//         state.data = action.payload;
//         }).
//         addCase(fetchPerson.rejected, (state, action) => {
//           console.log('rejected');
//         }
//         );

     
//     },
//   });

//   return {
//     slice,
//     reducer: slice.reducer,
//     actions: slice.actions,
//   };
// }
