import { actionType } from "./../actions";

/**
 * @function successReducer
 * @param {array} state --Array of guessed words
 * @param {object} action --action to be reduced
 * @returns {boolean} -new success state
 */

export default (state = false, action) => {
  switch (action.type) {
    case actionType.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
