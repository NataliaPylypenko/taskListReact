import React from 'react'
import {TableComponent} from "./TableComponent";

export const TaskTable: React.FC = () => {

  let head = ['', 'Name', 'Created', 'Category', 'Content', 'Dates'];

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
                  <button type="button" className="btn-star btn-sm btn-toggle"><i className="fas fa-folder-plus" />
                  </button>
                  <button type="button" className="btn-trash btn-sm"><i className="fas fa-trash" /></button>
              </div>
          </div>

          <div className="content">
              <TableComponent/>
          </div>

      </div>

  )
}

