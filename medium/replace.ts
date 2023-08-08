type Replace<
  S extends string,
  F extends string,
  T extends string
> = F extends ""
  ? S
  : S extends `${infer L}${F}${infer R}`
  ? `${L}${T}${R}`
  : S;
type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be "types are awesome!"
