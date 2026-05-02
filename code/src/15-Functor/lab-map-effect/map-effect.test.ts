import { describe, it, expect } from "@jest/globals";
import { pipe } from "effect/Function";
import { map, none, some } from "effect/Option";

const strLength = (x: string) => x.length;
const increment = (x: number) => x + 1;

describe("mapEffect", () => {
  it("should be able to compose strLength and increment", () => {
    expect(pipe("hello", strLength, increment)).toEqual(6);
  });
  it("should be able to map strLength and map increment over an Option", () => {
    expect(pipe(some("hello"), map(strLength), map(increment))).toEqual(some(6));
  });
  it("should be able to map strLength and map increment over an Option with pipe", () => {
    expect(pipe(none(), map(strLength), map(increment))).toEqual(none());
  }); 
});
