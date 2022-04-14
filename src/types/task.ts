export interface TaskInterface {
    id: string,
    name: string,
    created: string,
    content: string,
    category: string,
    status: string
}

export type TaskListPropsType = {
    tasks: TaskInterface[],
}

