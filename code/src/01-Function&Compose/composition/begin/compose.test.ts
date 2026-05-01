import { describe, it, expect } from "@jest/globals";
import {
  toString,
  increment,
  incrementThenToString,
  compose,
  add,
  // incrementThenToString,
  // compose
} from "./compose";

describe("Composition", () => {
  it("should compose two functions", () => {
    expect(toString(increment(1))).toBe("2");
  });

  it("should compose two functions with incrementThenToString", () => {
    expect(incrementThenToString(1)).toBe("2");
  });

  it("should compose two functions with my own compose", () => {
    expect(compose(increment, toString)(1)).toBe("2");
  });
});

describe("Add", () => {
  it("should add two numbers", () => {
    expect(add(1)(2)).toBe(3);
  });

  it('should add with toString compose', () => {
    const add1 = add(1);
    const add1TheToString = compose(add1, toString);

    expect(add1TheToString(2)).toBe("3");
  })

  it('should add with incrementThenToString compose', () => {
    const add1 = add(1);
    const incrementThenToStringAdd1 = compose(add1, incrementThenToString);
    expect(incrementThenToStringAdd1(2)).toBe("4");
  })
});
