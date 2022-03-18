import Flashcard from './flashcard/Flashcard.jsx'

const questions = ['a', 'b', 'c']

const CardContainer = () => 
    <article className="card-container">
        {questions.map((e, i) => <Flashcard index={i} data={e} />)}
    </article>

export default CardContainer