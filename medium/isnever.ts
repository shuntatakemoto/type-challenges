// https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.md
type IsNever<T> = [T] extends [never] ? true : false;

type A = IsNever<never>; // expected to be true
type B = IsNever<undefined>; // expected to be false
type C = IsNever<null>; // expected to be false
type F = IsNever<[]>; // expected to be false
type E = IsNever<number>; // expected to be false

// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
// Typically, distributivity is the desired behavior. To avoid that behavior, you can surround each side of the extends keyword with square brackets.

// https://github.com/microsoft/TypeScript/issues/31751#issuecomment-498526919
// This is the expected behavior, ExtendsNever is a distributive conditional type. Conditional types distribute over unions. Basically if T is a union ExtendsNever is applied to each member of the union and the result is the union of all applications (ExtendsNever<'a' | 'b'> == ExtendsNever<'a' > | ExtendsNever<'b'>). never is the empty union (ie a union with no members). This is hinted at by its behavior in a union  'a' | never == 'a'. So when distributing over never, ExtendsNever is never applied, since there are no members in this union and thus the result is never.

// https://github.com/type-challenges/type-challenges/issues/1894#issuecomment-869310547
// Because never can not exntends never, but never[] can extends never[]
