import { describe, it, expect } from "@jest/globals";
import { sum } from "./monoid";

describe("sum monoid", () => {
  it("should sum an array of numbers", () => {
    const sumNumbers = sum({ empty: 0, concat: (a, b) => a + b });
    expect(sumNumbers([1, 1, 1, 1, 1])).toBe(5);
  });

  it("should sum an array of strings", () => {
    const sumStrings = sum({ empty: "", concat: (a, b) => a + b });
    expect(sumStrings(["a", "b", "c"])).toBe("abc");
  });

  it("should sum an array of booleans", () => {
    const sumBooleans = sum({ empty: false, concat: (a, b) => a || b });
    expect(sumBooleans([true, false, true])).toBe(true);
  });

  it("should sum an array of array of string", () => {
    const sumArrayOfStrings = sum({ empty: [] as string[], concat: (a: string[], b: string[]) => a.concat(b) });
    expect(sumArrayOfStrings([["hello"], ["functional", "programming"]])).toEqual(["hello", "functional", "programming"]);
  });
});
  