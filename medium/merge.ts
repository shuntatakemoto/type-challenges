type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type Merge<T, U> = {
  [P in keyof T | keyof U]: P extends keyof U
    ? U[P]
    : P extends keyof T
    ? T[P]
    : never;
};

type Result2 = Merge<foo, coo>; // expected to be {name: string; age: number, sex: string}
