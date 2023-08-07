type Trim<S extends string> = S extends `${" "}${infer R}` | `${infer R}${" "}`
  ? Trim<R>
  : S;
type trimed = Trim<" Hello World ">; // expected to be "Hello World"

//more
type Space = " " | "\t" | "\n";
type Trim2<S extends string> = S extends
  | `${Space}${infer R}`
  | `${infer R}${Space}`
  ? Trim2<R>
  : S;
