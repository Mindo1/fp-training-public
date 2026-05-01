export type Either<E, A> = Left<E> | Right<A>;
export type Left<E> = Readonly<{
    _tag: 'Left',
    value: E
}>
export type Right<A> = Readonly <{
    _tag: 'Right',
    value: A
}>

export const left = <E>(value: E): Left<E> => ({
    _tag: 'Left',
    value
})

export const right = <A>(value: A): Right<A> => ({
    _tag: 'Right',
    value
})

export const isLeft = <E, A>(either: Either<E, A>): either is Left<E> => either._tag === 'Left'
export const isRight = <E,A>(either: Either<E, A>): either is Right<A> => either._tag === "Right"

export const fail = (message: string): never => {
    throw new Error(message)
}