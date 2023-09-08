// https://github.com/type-challenges/type-challenges/blob/main/questions/03192-medium-reverse/README.md
type Reverse<T extends any[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : T;

type b = Reverse<["a", "b"]>; // ['b', 'a']
type c = Reverse<["a", "b", "c"]>; // ['c', 'b', 'a']
