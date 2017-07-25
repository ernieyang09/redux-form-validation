import { combineReducers } from 'redux';

const getInitialState = () => ({
  test:"123"
});


const a = (state = getInitialState(), action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  "a" : a
})
