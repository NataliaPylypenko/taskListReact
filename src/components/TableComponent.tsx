import React from 'react'

export const TableComponent: React.FC = () => {

    return (

        <div className="table-row note-item">

            <div className="row-item flex-inherit w-45">
                <div className="logo d-flex justify-content-center align-items-center">
                    <i className="fas fa-tasks" />
                </div>
            </div>

            <span className="row-item heading-column">Shopping list</span>
            <span className="row-item">April 20, 2021</span>
            <span className="row-item">Task</span>
            <span className="row-item">Tomatoes, bread</span>
            <span className="row-item">-</span>

            <div className="row-item flex-item flex-inherit w-105 d-flex justify-content-end align-items-center">
                <button type="button" className="btn-star btn-sm btn-edit">
                    <i className="fas fa-pen" />
                </button>
                <button type="button" className="btn-star btn-sm btn-archive">
                    <i className="fas fa-folder-plus" />
                </button>
                <button type="button" className="btn-trash btn-sm btn-del">
                    <i className="fas fa-trash" />
                </button>
            </div>

        </div>

    );
};

