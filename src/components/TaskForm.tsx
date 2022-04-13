import React from 'react'

export const TaskForm: React.FC = () => {

  return (

    <form className="form-inline d-flex mb-20 create-form" action="#" id="create-form">
        <input type="hidden" name="id" />

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" placeholder="Enter name" id="name" />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category list:</label>
          <select className="form-control" id="category">
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
            <option value="Quote">Quote</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <input type="text" className="form-control" placeholder="Enter content" id="content" />
        </div>

        <button type="submit" id="createNote" className="btn btn-secondary create-note">
          Create Note
        </button>
      </form>
  )
}
