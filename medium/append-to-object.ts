type AppendToObject<T extends object, U extends string, V> = {
  [k in keyof T | U]: k extends keyof T ? T[k] : V;
};
type Test2 = { id: "1" };
type Result4 = AppendToObject<Test2, "value", 2>; // expected to be {id: "1", value: 2}
