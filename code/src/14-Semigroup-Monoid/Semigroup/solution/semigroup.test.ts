import { List, match, nil, cons } from "../linkedlist"

interface Magma<A> {
  concat: (x: A, y: A) => A
}

interface Semigroup<A> extends Magma<A> { }

const add: Semigroup<number> = { concat: (x, y) => x + y }
const multiply: Semigroup<number> = { concat: (x, y) => x * y }
const append: Semigroup<string> = { concat: (x, y) => x.concat(y) }

const concatAll =
  <A>(s: Semigroup<A>) =>
    (startsWith: A) =>
      (xs: List<A>): A =>
        match(
          () => startsWith,
          (head: A, tail: List<A>) => s.concat(head, concatAll(s)(startsWith)(tail))
        )(xs)

describe('Semigroup', () => {
  it('can be pass to concatAll function', () => {
    expect(
      concatAll(add)(0)(cons(2, cons(3, cons(4, nil))))
    ).toEqual(9)

    expect(
      concatAll(multiply)(1)(cons(2, cons(3, cons(4, nil))))
    ).toEqual(24)
  })

  expect(
    concatAll(append)('')(cons('hello', cons(' ', cons('world!', nil))))
  ).toEqual(`hello world!`)
})