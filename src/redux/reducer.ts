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
                    if(item.id === action.payload.id){
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
        default:
            return state;
    }
}

export type actionType = {
    type: string,
    payload: TaskInterface
}