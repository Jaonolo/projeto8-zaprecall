import StartButton from './start-button/StartButton.jsx'
import logo from '../assets/logo.png'

import decks from '../data'

const Welcome = ({control, setPage}) => {
    const [options, setOptions] = control

    return <main className="welcome">
        <div>
            <img src={logo} alt="main logo" />
            <h1>ZapRecall</h1>
        </div>
        <div className="welcome-control">
            <input placeholder='Escolha sua meta de zaps (padrão: 1)' onChange={({target}) => setOptions({...options, goal: target.value})} type='text'></input>
            <select onChange={({target}) => setOptions({...options, deck: decks[target.value]})} name="" id="">
                {Object.keys(decks).map((e, i) => <option key={`option-${i}`} value={e}>{e}</option>)}    
            </select>
            <StartButton startApp={() => {
                if(options.goal > options.deck.length || options.goal < 1) {
                    alert('Preencha os dados corretamente')
                    return
                }
                setPage('home')
            }} />
        </div>
    </main>
}

export default Welcome