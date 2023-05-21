import Task from "../model/Task.ts";

export function addTodoItem(title: string): Task {
    const newTodo: Task = {
        id: Date.now(),
        title,
        completed: false,
        createdAt: new Date(),
    };

    return newTodo;
}
