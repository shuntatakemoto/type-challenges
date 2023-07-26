type MyAwaited<T> = T extends Promise<infer R> ? R : any;
type ExampleType = Promise<string>;

type Result3 = MyAwaited<ExampleType>; // string
