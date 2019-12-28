import { correctGuess, actionType } from "./index";

describe("correctguess", () => {
  test("returns an action with Type `CORRECT_GUESS`", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionType.CORRECT_GUESS });
  });
});
