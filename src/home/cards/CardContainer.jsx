import Flashcard from './flashcard/Flashcard.jsx'

const CardContainer = ({questions, control}) =>
    <article className="card-container">
        {questions.map((e, i) => <Flashcard key={`card-${i}`} control={control} index={i} data={e} />)}
    </article>

export default CardContainer