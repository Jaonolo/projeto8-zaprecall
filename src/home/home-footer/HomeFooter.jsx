import { useState } from "react"

const HomeFooter = ({current, total, children}) => {
    const [footerState, setFooter] = useState([[], new Array(total).fill('')])
    const [doneDisplay, lastList] = footerState   

    const icons = {
        fail: "close-circle",
        almost: "help-circle",
        success: "checkmark-circle",
    }

    const message = () => currentCount.filter(e => e === 'fail').length > 0 ?
        {emoji: '', title: 'Putz...', body: 'Ainda faltam alguns... Mas não desanime!'} :
        {emoji: '', title: 'Parabéns!', body: 'Você não esqueceu de nenhum flashcard!'}
        

    let currentCount = current.filter(
        e => ['fail', 'almost', 'success'].includes(e)
    )

    if(currentCount.length !== doneDisplay.length)
        if(currentCount.length === 0)
            setFooter([[], new Array(total).fill('')])
        else
            setFooter([[...doneDisplay, current.filter((e, i) => e !== lastList[i])], current])

    const a = message()

    const Finish = props => currentCount.length === total ? <>
        <div>
            <p>{a.title}</p>
            <p>{a.body}</p>
        </div>
        {props.children}
        {children}
    </> : props.children

    return <footer className="home-footer">
        <Finish>
            {currentCount.length}/{total} CONCLUÍDOS
            <div>
                {doneDisplay.map(e => <ion-icon class={e} name={icons[e]}/>)}
            </div>
        </Finish>
    </footer>
}

export default HomeFooter