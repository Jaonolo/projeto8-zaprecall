import reactDom from "react-dom";
import { useState } from "react";
import Welcome from "./welcome/Welcome.jsx"

const App = () => {
    const [currentPage, setPage] = useState('welcome')

    const Pages = {
        welcome: <Welcome setPage={setPage}/>,
        home: <p>tchau</p>
    }
    
    return Pages[currentPage]
}

reactDom.render(<App />, document.querySelector('.root'))