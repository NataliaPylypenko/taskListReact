import {TaskInterface} from "../types/task";

export const delTaskAction = (payload: TaskInterface) => {
    return { type: "DELETE_TASK_ITEM", payload}
}