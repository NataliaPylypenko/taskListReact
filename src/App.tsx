import React from 'react'
import './App.css'
import { TasksPage } from './pages/TasksPage'
import {store} from "./redux";
import {Provider} from "react-redux";

const App: React.FC = () => {
  return (
      <Provider store={store}>
      <div className="page-content">
          <TasksPage />
      </div>
      </Provider>
  )
}

export default App