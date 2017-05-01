const pureCli = require('./pure-cli');

function reducer(state, input) {
  // put your code here
  if (state === null) {
    return 0;
  } else if (input === '+') {
    return state + 1;
  } else if (input === '-') {
    return state - 1;
  } else if (input === 'q') {
    return 'end';
  } else if (input === '3') {
    return state * state;
  } else {
    return state;
  }
}

module.exports = reducer;

function display(state) {
  console.log(state);
}

if (require.main === module) {
  pureCli(reducer, display);
}
