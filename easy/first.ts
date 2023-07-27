type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T[0];
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
type arr3 = [];

type head1 = First<arr1>; // expected to be "a"
type head2 = First<arr2>; // expected to be 3
type head3 = First<arr3>; // expected to be never

// more
type First2<T extends any[]> = T extends [infer U, ...any[]] ? U : never;
type head4 = First2<arr1>;
type head5 = First2<arr3>;
