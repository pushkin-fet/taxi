import { Header } from "./components/header/header"
import { MainPage } from "./pages/mainPage/mainPage"
import { Footer } from "./ui/layout/Footer"
import { Layout } from "./ui/layout/Layout"
import {Navigation} from "./routes/navigation.jsx";
import {createContext, useState} from "react";

export const Context = createContext();
function App() {

  const [isAuth, setIsAuth] = useState(false);

  return (
    <Context.Provider value={{isAuth: isAuth, setIsAuth: setIsAuth}}>
        <Navigation/>
    </Context.Provider>
  )
}

export default App
