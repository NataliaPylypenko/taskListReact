import React from 'react'
import { TaskForm } from '../components/TaskForm'
import { TaskTable } from '../components/TaskTable'
import { SummaryTable } from '../components/SummaryTable'

export const TasksPage: React.FC = () => {

    return (
        <React.Fragment>

            <div className="container">
                <TaskTable />
            </div>

            <div className="container">
                <div className="d-flex justify-content-end">
                    <TaskForm />
                </div>
            </div>

            <div className="container">
                <SummaryTable />
            </div>

        </React.Fragment>
    )
}
