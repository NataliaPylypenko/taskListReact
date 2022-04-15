import React from 'react';
import {CATEGORIES} from "../redux/db";
import { TaskInterfaceSummary } from "../types/task";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {getCategoryIcon} from "../helpers/function";

export const SummaryTable: React.FC = () => {
    const tasks = useTypedSelector(state => state.tasks)

    const summary: TaskInterfaceSummary[] = CATEGORIES.map(category => ({
        category,
        active: tasks.filter(task => task.category === category && task.status === 'active').length,
        archived: tasks.filter(task => task.category === category && task.status === 'archive').length,
    }))

  return (
      <div className="table-container table-summary">

          <div className="table-row heading-row">

            <div className="row-item flex-inherit w-45"></div>
            <span className="row-item">Note Category</span>
            <span className="row-item">Active</span>
            <span className="row-item">Archived</span>
          </div>

          <div className="content">
              {summary.map((item, i) => {
                  return (
                      <div className="table-row note-item" key={i}>

                          <div className="row-item flex-inherit w-45">
                              <div className="logo d-flex justify-content-center align-items-center">
                                  <i className={"fas fa-" + getCategoryIcon(item.category)}></i>
                              </div>
                          </div>
                          <span className="row-item heading-column">{item.category}</span>
                          <span className="row-item">{item.active}</span>
                          <span className="row-item">{item.archived}</span>

                      </div>
                  )
              })}


          </div>

      </div>
    )
}
