import { Option, Either, pipe } from "effect"
import { describe, expect, it } from "@jest/globals"

const matchOption = (option: Option.Option<number>): string =>
  pipe(
    option,
    Option.match({
      onNone: () => 'none',
      onSome: (x: number) => `${x}`
    })
  )

const matchEither = (either: Either.Either<number, string>): string =>
  pipe(
    either,
    Either.match({
      onLeft: (e: string) => e,
      onRight: (x: number) => `${x}`
    })
  )

describe('Match Effect', () => {
  it('should match Option success', () => {
    expect(
      matchOption(Option.some(1))
    ).toBe('1')
  })

  it('should match Option none', () => {
    expect(
      matchOption(Option.none())
    ).toBe('none')
  })

  it('should match Either success', () => {
    expect(
      matchEither(Either.right(1))
    ).toBe('1')
  })

  it('should match Either left', () => {
    expect(
      matchEither(Either.left('error'))
    ).toBe('error')
  })

  it('should match Either right', () => {
    expect(
      matchEither(Either.right(1))
    ).toBe('1')
  })
})