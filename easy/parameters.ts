const foo = (arg1: string, arg2: number): void => {};
type MyParameters<T extends (...args: any) => void> = T extends (
  ...args: infer R
) => any
  ? R
  : never;
type FunctionParamsType = MyParameters<typeof foo>; // [arg1:string, arg2:number]
