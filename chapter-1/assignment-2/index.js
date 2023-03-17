import produce from 'immer';

const baseState = [
  {
    title: 'Learn TypeScript',
    done: true,
  },
  {
    title: 'Try Immer',
    done: false,
  },
];

// without immer
// const nextState = baseState.slice(); // shallow clone the array

// // console.log(nextState);

// nextState[1] = {
//   // replace element at index 1
//   ...nextState[1], // with a shallow clone of element 1
//   done: true, // ...combined with the desired update
// };
// // since nextState was freshly cloned, using push is safe here,
// // but doing the same thing at any arbitrary time in the future would
// // violate the immutability principles and introduce a bug!
// nextState.push({ title: 'Tweet about it' });

// console.log(nextState);

// with immer
const nextState = produce(baseState, (draft) => {
  draft[1].done = true;
  draft.push({ title: 'Tweet about it' });
});

console.log(nextState);
