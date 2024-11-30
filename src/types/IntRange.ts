type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

/**
 * IntRange is a closed interval range.
 *
 * That is; given IntRange<0,100>, 0 through 100 inclusive make up the range
 *
 * e.g.
 * ```ts
 * const rangedNumber: IntRange<0,10> = 11
 * // Argument of type `11` is not assignable to parameter of type `IntRange<0,10>`
 * ```
 */
export type IntRange<F extends number, T extends number> =
  | Exclude<Enumerate<T>, Enumerate<F>>
  | T;
