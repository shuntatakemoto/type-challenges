type AppendToObject<T extends object, U extends string, V> = {
  [k in keyof T | U]: k extends keyof T ? T[k] : V;
};
type Test = { id: "1" };
type Result4 = AppendToObject<Test, "value", 2>; // expected to be {id: "1", value: 2}
