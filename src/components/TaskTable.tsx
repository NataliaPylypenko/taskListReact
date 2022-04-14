import React, {useState} from 'react'
import {initialState} from "../redux/store";
import { TaskInterface } from '../types/task'

export const TaskTable: React.FC = () => {

    const [state, setData] = useState(initialState);

    const delTaskHandler = (task: TaskInterface) => {
        setData({...state, tasks: state.tasks.filter(item => item.id !== task.id)})
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

                <div className="row-item flex-item flex-inherit w-105 d-flex justify-content-end align-items-center">
                    <button type="button" className="btn-star btn-sm btn-toggle"><i className="fas fa-folder-plus"/>
                    </button>
                    <button type="button" className="btn-trash btn-sm"><i className="fas fa-trash"/></button>
                </div>
            </div>

            <div className="content">

                {state.tasks.map((task, i) => (
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

                        <div
                            className="row-item flex-item flex-inherit w-105 d-flex justify-content-end align-items-center">
                            <button type="button" className="btn-star btn-sm btn-edit">
                                <i className="fas fa-pen"/>
                            </button>
                            <button type="button" className="btn-star btn-sm btn-archive" >
                                <i className="fas fa-folder-plus"/>
                            </button>
                            <button
                                type="button"
                                className="btn-trash btn-sm btn-del"
                                onClick={() => {
                                    delTaskHandler(task)
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

