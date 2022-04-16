import {initialState, STATUS} from "./db";
import {TaskActionTypes, TaskInterface, TaskListPropsType} from "../types/task";

export const reducer = (state = initialState, action: actionType): TaskListPropsType => {
    switch (action.type) {
        case TaskActionTypes.DELETE_TASK_ITEM:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload.id)
            }
        case TaskActionTypes.ARCHIVE_TASK_ITEM:
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item.id === action.payload.id) {
                        item.status = (item.status === STATUS.ACTIVE) ? STATUS.ARCHIVE : STATUS.ACTIVE
                    }
                    return item;
                })
            }
        case TaskActionTypes.TOGGLE_TASK_ITEM:
            return {
                ...state,
                showActiveTaskItems: (state.showActiveTaskItems === STATUS.ACTIVE ? STATUS.ARCHIVE : STATUS.ACTIVE)
            }
        case TaskActionTypes.ADD_TASK_ITEM:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case TaskActionTypes.EDIT_TASK_ITEM:
            return {
                ...state,
                currentTask: action.payload
            }
        case TaskActionTypes.UPDATE_TASK_ITEM:
            return updateTask(state, action.payload)
        default:
            return state;
    }
}

export type actionType = {
    type: string,
    payload: TaskInterface
}


const updateTask = (state: TaskListPropsType, payload: TaskInterface): TaskListPropsType => {
  state.tasks = state.tasks.map(item => {
        if(item.id === payload.id) {
            item = payload
        }
        return item
    })
    return state;
}