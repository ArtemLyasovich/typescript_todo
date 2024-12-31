export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
  priority: "low" | "medium" | "high";
}
