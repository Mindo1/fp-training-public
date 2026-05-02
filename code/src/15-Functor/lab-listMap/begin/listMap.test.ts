import { inc, listMap, map, sqr } from "./listMap"
import { describe, it, expect } from '@jest/globals'

describe('Functor listMap', () => {
  const increment = (n: number) => n + 1
  const square = (n: number) => n * n
  const filterEven = (n: number) => n % 2 === 0
  const toString = (n: number) => `${n}`

  //hard code function in listMap
  it('should increment a normal list', () => {
    expect(inc([1, 2, 3])).toEqual([2, 3, 4])
  })

  //hard code function in listMap
  it('should square a normal list', () => {
    expect(sqr([1, 2, 3])).toEqual([1, 4, 9])
  })

  it('should increment each element in a list', () => {
    expect(listMap(increment)([1, 2, 3])).toEqual([2, 3, 4])
  })

  it('should square each element in a list', () => {
    expect(listMap(square)([1, 2, 3])).toEqual([1, 4, 9])
  })

  it('should map over a list with an arbitrary function', () => {
    expect(map(increment)([1, 2, 3])).toEqual([2, 3, 4])
    expect(map(square)([1, 2, 3])).toEqual([1, 4, 9])
  })

  it('should map over a list with an arbitrary function', () => {
    expect(map(filterEven)([1, 2, 3, 4])).toEqual([false, true, false, true])
  })

  it('should map over a list with an arbitrary function', () => {
    expect(map(toString)([1, 2, 3])).toEqual(['1', '2', '3'])
  })
})