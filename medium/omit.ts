interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, K> = {
  [P in Exclude<keyof T, K>]: T[P];
};
type TodoPreview2 = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview2 = {
  completed: false,
};
