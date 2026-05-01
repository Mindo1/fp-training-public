import { describe, it, expect } from '@jest/globals'
import { Either, left, right, isLeft, isRight, fail } from "./either"

const divideTwo = (divisor: number): Either<string, number> => {
  if (divisor === 0) {
    return left('Division by zero error.')
  } else {
    return right(2 / divisor)
  }
}
describe('divideTwo', () => {
  it('should be Right when divisor is not zero, otherwise should be Left', () => {
    expect(isRight(divideTwo(4))).toBeTruthy
    expect(isLeft(divideTwo(0))).toBeTruthy
  })

  it('should return the result when divisor is not zero', () => {
    const result = divideTwo(4)
    if (isRight(result)) {
      expect(result.value).toBe(0.5)
    } else {
      fail('should be Right')
    }
  })
})