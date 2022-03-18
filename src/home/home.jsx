import HomeFooter from './home-footer/HomeFooter.jsx'
import logo from '../assets/logo-pequeno.png'

const Home = () =>
    <main className="home">
        <div>
            <img src={logo} alt="home logo" />
            <h1>ZapRecall</h1>
        </div>
        
        <HomeFooter/>
    </main>

export default Home