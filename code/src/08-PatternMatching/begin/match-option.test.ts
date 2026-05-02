import { describe, expect, it } from "@jest/globals"
// import { pipe } from 'effect/Function'
import { match, matchW, none, Option, some } from './match-option'
import { cons } from "effect/List";

describe('Match Option', () => {
  it('should match some', () => {
    const mayBeNum : Option<number> = some(42);
    const matched = match(
      ()=> `number is none`,
      (x)=> `number is ${x}`
    )(mayBeNum);

    expect(matched).toBe('number is 42');
  })

  it('should match none', () => {
    const mayBeNum : Option<number> = none;
    const matched = match(
      ()=> `number is none`,
      (x)=> `number is ${x}`
    )(mayBeNum);

    expect(matched).toBe('number is none');
  })
})

describe('MatchW Option', () => {
  it('should match some', () => {
    const mayBeNum : Option<number> = some(42);
    const matched = matchW(
      ()=> `number is none`,
      (x)=> `number is ${x}`
    )(mayBeNum);

    expect(matched).toBe('number is 42');
  })

  it('should match none', () => {
    const mayBeNum : Option<number> = none;
    const matched = matchW(
      ()=> `number is none`,
      (x)=> `number is ${x}`
    )(mayBeNum);

    expect(matched).toBe('number is none');
  })
})