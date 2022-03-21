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
        <div>
            <input onChange={({target}) => setOptions({...options, goal: target.value})} type='text'></input>
            <select onChange={({target}) => setOptions({...options, deck: target.value})} name="" id="">
                {Object.keys(decks).map(e => <option value={e}>{e}</option>)}    
            </select>
            <StartButton setPage={setPage} />
        </div>
    </main>
}

export default Welcome