import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './components/Shared/Global.styled'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/Popups/PopBrowse/PopBrowse'
import PopExit from './components/Popups/PopExit/PopExit'
import PopNewCard from './components/Popups/PopNewCard/PopNewCard'
import Tasks from './data/tasks'
import { lightTheme } from './components/Shared/Themes'
import * as Common from './components/Shared/Common.styled'


function App() {
  const [tasks, setTasks] = useState(Tasks)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <PopExit />
      <PopNewCard />
      <PopBrowse />

      <Common.Wrapper>
        <Header setTasks={setTasks} />
        {
          isLoading
            ? <Common.Loading>Данные загружаются...</Common.Loading>
            : <Main tasks={tasks} />
        }
      </Common.Wrapper>
    </ThemeProvider>
  )
}

export default App
