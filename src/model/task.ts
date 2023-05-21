class Task {
    id: number;
    title: string;
    createdAt: Date;
    completed: boolean;

    constructor(id: number, title: string, completed: boolean = false) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

export default Task;