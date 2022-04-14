import {initialState} from "./db";
import {TaskInterface, TaskListPropsType} from "../types/task";

export const reducer = (state = initialState, action: actionType): TaskListPropsType => {
    switch (action.type) {
        case 'DELETE_TASK_ITEM':
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export type actionType = {
    type: string,
    payload: TaskInterface
}