import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

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
  "a" : a,
  "form": formReducer
})
