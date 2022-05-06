import { useSelector, shallowEqual } from "react-redux";
import { useMemo } from "react";

const useShallowEqualSelector = (selector) => {
  return useSelector(selector, shallowEqual);
};

const useShallowEqualSelectorToJS = (selector) => {
  const result = useSelector(selector, shallowEqual);
  return useMemo(() => result.toJS(), [result]);
};

export { useShallowEqualSelector, useShallowEqualSelectorToJS };
