type Unshift<T extends any[], U> = [U, ...T];
type Result2 = Unshift<[1, 2], 0>;
