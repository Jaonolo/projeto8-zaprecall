import reactDom from "react-dom";
import { useState } from "react";
import Welcome from "./welcome/Welcome.jsx"
import Home from "./home/home.jsx";

const App = () => {
    const [currentPage, setPage] = useState('welcome')
    const [options, setOptions] = useState({
        deck: [{question: 'a', answer: 'b'}, 'b', 'c'],
        goal: 3
    })

    const Pages = {
        welcome: <Welcome control={[options, setOptions]} setPage={setPage}/>,
        home: <Home options={options}/>
    }
    
    return Pages[currentPage]
}

reactDom.render(<App />, document.querySelector('.root'))