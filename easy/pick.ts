interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
type TodoPreview = MyPick<Todo2, "title" | "completed">;

const todo2: TodoPreview = {
  title: "Clean room",
  completed: false,
};

//More
type MyPick2<T, K extends keyof T | string | number | symbol> = {
  [P in K]: P extends keyof T ? T[P] : never;
};
