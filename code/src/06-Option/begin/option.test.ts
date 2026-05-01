import { describe, it, expect } from '@jest/globals'
import { isNone, isSome, none, some, Option } from "./option"
import { pipe } from 'fp-ts/lib/function';

const divideTwo = (n: number): number => 2/n;
const liftUp = (n: number): Option<number> => n === 0 ? none : some(n);
const shouldDivideTwo = (o: Option<number>) => isSome(o) ? some(divideTwo(o.value)) : none;
describe('Option', () => {
  it('verify some option', () => {
    expect(isSome(some(1))).toBeTruthy()
    expect(isNone(some(1))).toBeFalsy()
  })

  it('verify none option', () => {
    expect(isNone(none)).toBeTruthy()
    expect(isSome(none)).toBeFalsy()
  })
})

describe('Option with compose', () => {
  it('should compose some option', ()=>{
    expect(pipe(1, liftUp, shouldDivideTwo)).toEqual(some(2))
  })

  it('should compose none option', ()=>{
    expect(pipe(0, liftUp, shouldDivideTwo)).toEqual(none)})
})