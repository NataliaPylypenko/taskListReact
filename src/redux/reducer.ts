import {initialState} from "./db";
import {TaskInterface, TaskListPropsType} from "../types/task";

export const reducer = (state = initialState, action: actionType): TaskListPropsType => {
    switch (action.type) {
        case 'DELETE_TASK_ITEM':
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload.id)
            }
        case 'ARCHIVE_TASK_ITEM':
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item.id === action.payload.id) {
                        item.status = (item.status === 'active') ? 'archive' : 'active'
                    }
                    return item;
                })
            }
        case 'TOGGLE_TASK_ITEM':
            return {
                ...state,
                showActiveTaskItems: (state.showActiveTaskItems === 'active' ? 'archive' : 'active')
            }
        case 'ADD_TASK_ITEM':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case 'EDIT_TASK_ITEM':
            return {
                ...state,
                currentTask: action.payload
            }
        case 'UPDATE_TASK_ITEM':
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