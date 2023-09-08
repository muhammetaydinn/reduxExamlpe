import {PayloadAction, createSlice} from '@reduxjs/toolkit';
// Person interface
export interface Person {
  id: number;
  name: string;
}
// PersonState interface
export interface PersonState {
  persons: Person[];
}
// Initial state
const initialState: PersonState = {
  persons: [],
};
// Person slice with addPerson reducer that takes a name and adds it to the persons array
export const PersonSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<{name: string}>) => {
      state.persons.push({
        id: state.persons.length,
        name: action.payload.name,
      });
    },
    deletePerson: (state, action: PayloadAction<{index: number}>) => {
      state.persons.splice(action.payload.index, 1);
      console.log(state.persons);
    },
  },
});
// Export addPerson action

export const {addPerson, deletePerson} = PersonSlice.actions;
// Export person reducer
export default PersonSlice.reducer;
