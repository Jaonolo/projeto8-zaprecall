import { useState } from "react"

const Flashcard = ({control, data, index}) => {
    const [currentFace, setFace] = useState('front')
    const [cardStatus, setStatus] = control

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
                <ion-icon onClick={startCard} name="play-outline"></ion-icon>
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
                    <button onClick={() => finishCard('fail')}>oi</button>
                    <button onClick={() => finishCard('almost')}>oi</button>
                    <button onClick={() => finishCard('success')}>oi</button>
                </div>
            </section>
    }

    return(
        <button className="flashcard">
            {faces[currentFace]}
        </button>
    )
}

export default Flashcard