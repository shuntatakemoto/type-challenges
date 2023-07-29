type arr4 = ["a", "b", "c"];
type arr5 = [3, 2, 1];

type Last<T extends any[]> = T extends [...any[], infer U] ? U : never;
type tail1 = Last<arr4>; // expected to be "c"
type tail2 = Last<arr5>; // expected to be 1
