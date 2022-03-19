import { useState } from "react"

const Flashcard = ({control, data, index}) => {
    const [currentFace, setFace] = useState('front')
    const [cardStatus, setStatus] = control

    const icons = {
        fail: "close-circle",
        almost: "help-circle",
        success: "checkmark-circle",
    }

    const startCard = () => {
        if(['fail', 'almost', 'success'].includes(cardStatus[index]))
            return 0
        setFace('question')
        const newStatus = [...cardStatus]
        newStatus[index] = 'playing'
        setStatus(newStatus)
    }

    const finishCard = score => {
        const newStatus = [...cardStatus]
        newStatus[index] = score
        setStatus(newStatus)
        setFace('front')
    }

    const faces = {
        front:
            <section className="front">
                Pergunta {index + 1}
                <ion-icon className={cardStatus[index]}  onClick={startCard} name={icons[cardStatus[index]] || "play-outline"}></ion-icon>
            </section>,

        question: 
            <section className="question">
                <div>{data.question}</div>
                <ion-icon onClick={() => setFace('answer')} name="refresh-outline"></ion-icon>
            </section>,

        answer: 
            <section className="answer">
                {data.answer}
                <div>
                    <button className="fail" onClick={() => finishCard('fail')}>Não Lembrei</button>
                    <button className="almost" onClick={() => finishCard('almost')}>Quase Não Lembrei</button>
                    <button className="success" onClick={() => finishCard('success')}>Zap!</button>
                </div>
            </section>
    }

    return(
        <div className="flashcard">
            {faces[currentFace]}
        </div>
    )
}

export default Flashcard