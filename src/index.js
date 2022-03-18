import reactDom from "react-dom";
import { useState } from "react";
import Welcome from "./welcome/Welcome.jsx"
import Home from "./home/home.jsx";

const App = () => {
    const [currentPage, setPage] = useState('welcome')

    const Pages = {
        welcome: <Welcome setPage={setPage}/>,
        home: <Home/>
    }
    
    return Pages[currentPage]
}

reactDom.render(<App />, document.querySelector('.root'))