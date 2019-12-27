import checkPropType from "check-prop-types";

export const checkProps = (component, props) => {
  const propError = checkPropType(
    component.propTypes,
    props,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};

/**
 * Return Shallow wrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper -Enzyme Shallow wrapper to search within
 * @param {string} val -Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
