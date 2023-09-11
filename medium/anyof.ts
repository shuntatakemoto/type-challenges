// https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md

type Falsy = false | "" | 0 | [] | { [key: string]: never };
type AnyOf<T extends any[]> = T extends Falsy[] ? false : true;

type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
