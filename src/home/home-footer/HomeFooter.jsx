import { useState } from "react"

const HomeFooter = ({current, total}) => {
    const [doneDisplay, setDisplay] = useState([])
    const [lastList, setLast] = useState(new Array(total).fill(''))

    const icons = {
        fail: "close-circle",
        almost: "help-circle",
        success: "checkmark-circle",
    }

    let currentCount = current.filter(
        e => ['fail', 'almost', 'success'].includes(e)
    )
   
    if(currentCount.length !== doneDisplay.length){
        setDisplay([...doneDisplay, current.filter((e, i) => e !== lastList[i])])
        setLast(current)
    }

    return <footer className="home-footer">
        {currentCount.length}/{total} CONCLUÍDOS
        <div>
            {doneDisplay.map(e => <ion-icon name={icons[e]}/>)}
        </div>
    </footer>   
}

export default HomeFooter