import HomeFooter from './home-footer/HomeFooter.jsx'
import logo from '../assets/logo-pequeno.png'
import CardContainer from './cards/CardContainer.jsx'
import { useState } from 'react'

const Home = ({options}) => {
    const {deck: questions, goal} = options
    const [cardStatus, setStatus] = useState(questions.map(() => ''))
    

    const restartQuizz = () => setStatus(new Array(questions.length).fill(''))

    return <main className="home">
        <div>
            <img src={logo} alt="home logo" />
            <h1>ZapRecall</h1>
        </div>
        <CardContainer questions={questions} control={[cardStatus, setStatus]}/>
        <HomeFooter total={questions.length} current={cardStatus}>
            <button onClick={restartQuizz}>Reiniciar Quizz</button>
        </HomeFooter>
    </main>
}

export default Home