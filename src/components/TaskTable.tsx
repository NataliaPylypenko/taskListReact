import React from 'react';
import { TaskInterface} from "../types/task";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

export const TaskTable: React.FC = () => {
    const tasks = useTypedSelector(state => state.tasks)
    const showActiveTaskItems = useTypedSelector(state => state.showActiveTaskItems)
    const {delTaskAction} = useActions()

    const delTaskHandler = (task: TaskInterface) => {
        //setData({...state, tasks: state.tasks.filter(item => item.id !== task.id)})
    }
    const archiveTaskHandler = (task: TaskInterface) => {
        // setData({
        //     ...state,
        //     tasks: state.tasks.map(item => {
        //         if(item.id === task.id){
        //             item.status = (item.status === 'active') ? 'archive' : 'active'
        //         }
        //         return item;
        //     })
        // })
    }
    const toggleStatusHandler = () => {
        // setData({
        //     ...state,
        //     showActiveTaskItems: (state.showActiveTaskItems === 'active' ? 'archive' : 'active')
        // })
    }

    return (

        <div className="table-container table-main">

            <div className="table-row heading-row">
                <div className="row-item flex-inherit w-45"></div>

                <span className="row-item">Name</span>
                <span className="row-item">Created</span>
                <span className="row-item">Category</span>
                <span className="row-item">Content</span>
                <span className="row-item">Dates</span>
                <span className="row-item">status</span>

                <div className="row-item flex-item flex-inherit w-105 d-flex justify-content-end align-items-center">
                    <button type="button" className="btn-star btn-sm btn-toggle" onClick={ toggleStatusHandler }><i className="fas fa-folder-plus"/>
                    </button>
                    <button type="button" className="btn-trash btn-sm"><i className="fas fa-trash"/></button>
                </div>
            </div>

            <div className="content">

                {tasks
                    .filter(task => task.status === showActiveTaskItems)
                    .map((task, i) => (
                        <div className="table-row note-item" key={i}>

                            <div className="row-item flex-inherit w-45">
                                <div className="logo d-flex justify-content-center align-items-center">
                                    <i className="fas fa-tasks"/>
                                </div>
                            </div>

                            <span className="row-item heading-column">{task.name}</span>
                            <span className="row-item">{task.created}</span>
                            <span className="row-item">{task.created}</span>
                            <span className="row-item">{task.content}</span>
                            <span className="row-item">-</span>
                            <span className="row-item">{task.status}</span>

                            <div
                                className="row-item flex-item flex-inherit w-105 d-flex justify-content-end align-items-center">
                                <button type="button" className="btn-star btn-sm btn-edit">
                                    <i className="fas fa-pen"/>
                                </button>
                                <button type="button" className="btn-star btn-sm btn-archive" onClick={() => {
                                    archiveTaskHandler(task)
                                }}>
                                    <i className="fas fa-folder-plus"/>
                                </button>
                                <button type="button" className="btn-trash btn-sm btn-del" onClick={() => {
                                    delTaskAction(task)
                                }}>
                                    <i className="fas fa-trash"/>
                                </button>
                            </div>

                        </div>

                    ))}

            </div>

        </div>

    )
}

