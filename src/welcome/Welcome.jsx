import StartButton from './start-button/StartButton.jsx'
import logo from '../assets/logo.png'

const Welcome = ({setPage}) =>
    <main className="welcome">
        <div>
            <img src={logo} alt="main logo" />
            <h1>ZapRecall</h1>
        </div>
        <StartButton setPage={setPage} />
    </main>

export default Welcome