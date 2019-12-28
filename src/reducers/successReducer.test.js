import { actionType } from "./../actions/index";
import successReducer from "./successReducer";

test("returns default initial state of `false` when no action is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("return state of true upon received an action of type `CORRECT_GUESS`", () => {
  const action = { type: actionType.CORRECT_GUESS };
  const newState = successReducer(undefined, action);
  expect(newState).toBe(true);
});
