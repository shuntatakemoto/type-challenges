type MyExclude<T, U> = T extends U ? never : T;
type Result = MyExclude<"a" | "b" | "c", "a">; // "b" | "c"

// For example, an instantiation of T extends U ? X : Y with the type argument A | B | C for T is resolved as (A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y).
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types
