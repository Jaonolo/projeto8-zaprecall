import HomeFooter from './home-footer/HomeFooter.jsx'
import logo from '../assets/logo-pequeno.png'
import CardContainer from './cards/CardContainer.jsx'
import { useState } from 'react'

const questions = [{question: 'a', answer: 'b'}, 'b', 'c']

const Home = () => {
    const [cardStatus, setStatus] = useState(questions.map(() => ''))

    return <main className="home">
        <div>
            <img src={logo} alt="home logo" />
            <h1>ZapRecall</h1>
        </div>
        <CardContainer questions={questions} control={[cardStatus, setStatus]}/>
        <HomeFooter total={questions.length} current={cardStatus}/>
    </main>
}

export default Home