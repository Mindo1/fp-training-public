type Option<A> = None | Some<A>;

type None = Readonly<{
  _tag: "None";
}>;

type Some<A> = Readonly<{
  _tag: "Some";
  value: A;
}>;

type Match = <A, B>(
  onNone: () => B,
  onSome: (a: A) => B,
) => (x: Option<A>) => B;

type MatchW = <A,B,C>(
  onNone: () => B,
  onSome: (a: A) => C,
) => (x: Option<A>) => B | C;

const some = <A>(x: A): Option<A> => ({ _tag: "Some", value: x });
const none: Option<never> = { _tag: "None" };

const isSome = <A>(option: Option<A>): option is Some<A> =>
  option._tag === "Some";
const isNone = <A>(option: Option<A>): option is None => option._tag === "None";

const match: Match = (onNone, onSome) => (x) => isNone(x) ? onNone() : onSome(x.value);

const matchW: MatchW = (onNone, onSome) => (x) => isNone(x) ? onNone() : onSome(x.value);

export { Option, None, Some, some, none, isSome, isNone, match, matchW };
