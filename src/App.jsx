import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/Popups/PopBrowse/PopBrowse'
import PopExit from './components/Popups/PopExit/PopExit'
import PopNewCard from './components/Popups/PopNewCard/PopNewCard'
import Tasks from './data/tasks'


function App() {
  const [tasks, setTasks] = useState(Tasks)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
    <div className="wrapper">

      {/* {pop-up start} */}
      <PopExit />

      <PopNewCard />

      <PopBrowse />
      {/* {pop-up end} */}

      <Header setTasks={setTasks} />

      {
        isLoading
          ? <div className="loading">Данные загружаются...</div>
          : <Main tasks={tasks} />
      }

    </div>
  )
}

export default App
