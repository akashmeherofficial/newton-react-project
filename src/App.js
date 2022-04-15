import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import {LoginContext} from "./components/context/LoginContext"
import {ThemeContext} from "./components/context/ThemeContext"



function App() {

  const [isLoggedIn,updateLogin]=useState(false)
  const [theme,setTheme]=useState("")
  const [username,setUsername]=useState("lightyellow")

  return (
    
    <div className="App">
      <button className="theme-button" onClick={() => setTheme("antiquewhite")}>
            Reading Mode
          </button>
      <button className="theme-button" onClick={() => setTheme("midnightblue")}>
            Night Mode
          </button>
    <LoginContext.Provider value={{isLoggedIn,updateLogin,username,setUsername}}>
    <ThemeContext.Provider value={{theme,setTheme}}>

      {isLoggedIn?<Home/>:<Login/>}
    </ThemeContext.Provider>
    </LoginContext.Provider>


         </div>

  );
}

export default App;
