import IssueHome from "./views/Issues/IssueHome";
import CssBaseline from '@mui/material/CssBaseline';

import "dota2-minimap-hero-sprites/assets/stylesheets/dota2_minimapheroes.css"
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {useState} from "react"

const App = () => {
  const [mode, setMode] = useState('dark')

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const toggleDarkMode = () => {
    if(mode=="dark")  
      setMode('light')
    else
      setMode('dark')
  }

  return <ThemeProvider theme={darkTheme}>
      <div className="App">
        <CssBaseline />
          <IssueHome mode={mode} setMode={toggleDarkMode}/>
      </div>
    </ThemeProvider>
}

export default App;
