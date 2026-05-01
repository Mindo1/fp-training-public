export type Option<A> = Some<A> | None

type Some<A> = Readonly<{
    _tag: 'some',
    value: A
}>
type None = Readonly<{
    _tag: 'none'
}>

export const some = <A>(value: A): Some<A> => ({
    _tag: 'some',
    value
})

export const none: None = {
    _tag: 'none'
}

export const isSome = <A>(option: Option<A>): option is Some<A> => option._tag === 'some'
export const isNone = <A>(option: Option<A>): option is None => option._tag === 'none'

