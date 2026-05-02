export type Monoid<M> = Readonly<{
    empty: M;
    concat: (x: M, y: M) => M;
}>

export type Sum<A> = (ns: A[]) => A

export const sum = <A>(M: Monoid<A>): Sum<A> => (ns) => ns.length === 0 ? M.empty : M.concat(ns[0], sum(M)(ns.slice(1)))