const Flashcard = ({data, index}) => 
    <button className="flashcard">
        <section className="front">Pergunta {index + 1}</section>
        <section>{data.enunciado}</section>
        <section>{data.answer}</section>
    </button>

export default Flashcard