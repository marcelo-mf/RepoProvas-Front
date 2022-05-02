import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthContext from "./contexts/AuthContext"
import Login from "./pages/Authentication/Login/Login"
import Register from "./pages/Authentication/Register/Register"
import Home from "./pages/Home/Home"
import { useState } from "react"

export default function App () {

    const persistedtoken = localStorage.getItem("token");
    const [token, setToken] = useState(persistedtoken);

    function setAndPersistToken(token) {
        setToken(token);
        localStorage.setItem("token", token);
      }

    return (
        <AuthContext.Provider value={{token, setToken, setAndPersistToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}