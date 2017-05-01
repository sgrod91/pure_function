const pureCli = require('./pure-cli');

function reducer(state, input) {
  // // put your code here
  if (state === null) {
    return { stack: [ ] };

  } else if (input === '4') {
    return { stack: [4] };

  } else if (input === '+') {
    let lastIndex = state.stack.length - 1;
    let secondLastIndex = state.stack.length - 2;
    let sum = state.stack[lastIndex] + state.stack[secondLastIndex];
    let theArray = state.stack.slice(0, state.stack.length - 2).concat([sum]);
    return {stack: theArray};

  } else if (input === '-') {
    let subtract = state.stack[1] - state.stack[0];
    return {stack: [subtract]};

  } else if (input === '*') {
    let multiplication = state.stack[0] * state.stack[1];
    return {stack: [multiplication]};

  } else if (input === '/') {
    let divide = state.stack[1] / state.stack[0];
    return {stack: [divide]};

  }else if (input ==='q') {
    return {
      stack: state.stack,
      action: 'end'
    };
  }


}

module.exports = reducer;

function display(state) {
  console.log(state.stack.join(' '));
}

if (require.main === module) {
  pureCli(reducer, display);
}
