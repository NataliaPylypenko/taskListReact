
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
    showActiveTaskItems: string,
    currentTask: TaskInterface | null
}

export type statusType = {
    ACTIVE: string,
    ARCHIVE: string,
}

export interface TaskInterfaceSummary {
    category: string,
    active: number,
    archived: number
}

export type CategoryIconType = {
    name: string,
    icon: string
}

export interface IFormValues {
    id: string;
    name: string;
    content: string;
    category: string;
    created: string;
    dates: string;
    status: string;
}

export enum TaskActionTypes {
    DELETE_TASK_ITEM = 'DELETE_TASK_ITEM',
    ARCHIVE_TASK_ITEM = 'ARCHIVE_TASK_ITEM',
    TOGGLE_TASK_ITEM = 'TOGGLE_TASK_ITEM',
    ADD_TASK_ITEM = 'ADD_TASK_ITEM',
    EDIT_TASK_ITEM = 'EDIT_TASK_ITEM',
    UPDATE_TASK_ITEM = 'UPDATE_TASK_ITEM',
}
