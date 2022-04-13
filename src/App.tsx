import React from 'react'
import './App.css'
import { TasksPage } from './pages/TasksPage'

const App: React.FC = () => {
  return (
      <div className="page-content">
          <TasksPage />
      </div>
  )
}

export default App