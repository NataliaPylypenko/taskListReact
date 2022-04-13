import React from 'react'

export const SummaryTable: React.FC = () => {

  return (
      <div className="table-container table-summary">

          <div className="table-row heading-row">

            <div className="row-item flex-inherit w-45"></div>
            <span className="row-item">Note Category</span>
            <span className="row-item">Active</span>
            <span className="row-item">Archived</span>
          </div>

          <div className="content">
              <div className="table-row note-item">

                  <div className="row-item flex-inherit w-45">
                      <div className="logo d-flex justify-content-center align-items-center">
                          <i className="fas fa-tasks"></i>
                      </div>
                  </div>

                  <span className="row-item heading-column">Task</span>
                  <span className="row-item">2</span>
                  <span className="row-item">0</span>

              </div>
          </div>

      </div>
    )
}
