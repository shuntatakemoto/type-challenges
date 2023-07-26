type Concat<T extends any[], U extends any[]> = [...T, ...U];
type Result4 = Concat<[1], [2]>; // expected to be [1,2]
