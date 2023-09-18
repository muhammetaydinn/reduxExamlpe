// // export function createCounterWithNamedType(counterName = '') {
// //   return function counter(state = 0, action:any) {
// //     switch (action.type) {
// //       case `INCREMENT_${counterName}`:
// //         return state + 1;
// //       case `DECREMENT_${counterName}`:
// //         return state - 1;
// //       default:
// //         return state;
// //     }
// //   };
// // }

// import { combineReducers } from "@reduxjs/toolkit";

// // export function createCounterWithNameData(counterName = '') {
// //   return function counter(state = 0, action:any) {
// //     const {name} = action;
// //     if (name !== counterName) return state;

// //     switch (action.type) {
// //       case `INCREMENT`:
// //         return state + 1;
// //       case `DECREMENT`:
// //         return state - 1;
// //       default:
// //         return state;
// //     }
// //   };
// // }
// // ////////////////////////////////////////////////////////
// // export function counter(state = 0, action:any) {
// //   switch (action.type) {
// //     case 'INCREMENT':
// //       return state + 1;
// //     case 'DECREMENT':
// //       return state - 1;
// //     default:
// //       return state;
// //   }
// // }

// // export function createNamedWrapperReducer(reducerFunction:any, reducerName:any) {
// //   return (state: any, action: any) => {
// //     console.log('reducerName', reducerName);
// //     const {name} = action;
// //     const isInitializationCall = state === undefined;
// //     //if state
// //     if (name !== reducerName && !isInitializationCall) return state;

// //     return reducerFunction(state, action);
// //   };
// // }
// /////////////////////////////////
// function counterReducer(state:any, action:any) {
//     switch(action.type) {
//         case "INCREMENT" : return state + 1;
//         case "DECREMENT" : return state - 1;
//     }
// }

// function countersArrayReducer(state:any, action:any) {
//     switch(action.type) {
//         case "INCREMENT":
//         case "DECREMENT":
//             return state.map( (counter:any, index:any) => {
//                 if(index !== action.index) return counter;
//                 return counterReducer(counter, action);
//             });
//         default:
//             return state;
//     }
// }

// function countersMapReducer(state:any, action:any) {
//     switch(action.type) {
//         case "INCREMENT":
//         case "DECREMENT":
//             return {
//                 ...state,
//               state: {
//                 ...state[action.index],
//                 value: counterReducer(state[action.index].value, action)
//               }
//             };
//         default:
//             return state;
//     }
// }