const StartButton = ({setPage}) => {
    const startApp = () => setPage('home')

    return <button className="start-button" onClick={startApp}>
        Iniciar Recall!
    </button>
}

export default StartButton