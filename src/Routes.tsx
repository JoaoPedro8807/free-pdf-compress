import React from "react"
import { About } from "./pages/about/about"
import Compress from "./pages/compress/home"
import HomeIndex from "./pages/home"
import {
    BrowserRouter as Router,
    Routes,
    Route

} from "react-router-dom"


// importar as pages
export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/compress" element={<Compress/>}> </Route>
                <Route path="*" element={<HomeIndex/>} ></Route>
            </Routes>
        </Router>
    )
}