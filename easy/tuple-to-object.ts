const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type TupleObject<T extends readonly string[]> = {
  [K in T[number]]: K;
};

type result = TupleObject<typeof tuple>;
