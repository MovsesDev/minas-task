export interface Todo {
    id: string,
    title: string,
    completed: boolean,
    author?: string
}

export interface Todos {
    todos: Todo[]
}