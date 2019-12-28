import React from "react";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GuessWords from "./GuessWords";
import { findByTestAttr, checkProps } from "./../../test/testUtil";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};
/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props -Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupDefaultProps = { ...defaultProps, ...props };
  return shallow(<GuessWords {...setupDefaultProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const congratsComponent = findByTestAttr(wrapper, "component-guesswords");
  expect(congratsComponent.length).toBe(1);
});

test("Does not throw warning with expected props", () => {
  checkProps(GuessWords, defaultProps);
});

//different contexts like
// showing something in codition like
//if else that are kind of called contexts

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWord: [] });
  });
  test("renders without errors", () => {
    const component = findByTestAttr(wrapper, "component-guesswords");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess the words", () => {
    const instruction = findByTestAttr(wrapper, "guess-instructions");
    expect(instruction.text().length).not.toBe(0);
  });
});

describe("if there are words gussed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 }
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without errors", () => {
    const component = findByTestAttr(wrapper, "component-guesswords");
    expect(component.length).toBe(1);
  });
  test("renders guessed words section", () => {
    const guessedWordNode = findByTestAttr(wrapper, "guess-words");
    expect(guessedWordNode.text().length).not.toBe(1);
  });
  test.only("displayes correct number of guessed words", () => {
    const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});
