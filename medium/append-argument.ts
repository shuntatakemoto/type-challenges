type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer P
  ? (...args: [...R, A]) => P
  : never;

type Fn = (a: number, b: string) => number;

type Result3 = AppendArgument<Fn, boolean>;
// expected to be (a:number,b:string,x:boolean) => number
