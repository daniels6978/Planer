import { Link } from 'react-router-dom'
import './styleMenu.css'


const Menu = () => {

  
    
                

    return (
        <div className="menu">
            <h1>planer weselny</h1>
            <Link to='stronaGowna' />
            <Link to='planZadan'/>
            <Link to='budzet'/>
            {/* <button onClick={() => window.history.pushState(nextState, nextTitle, 'http://localhost:3000/goscie')}>Goście</button>
            <button onClick={() => window.history.pushState(nextState, nextTitle, 'http://localhost:3000/')}>Wyloguj</button> */}

        </div>
    )
}

export default Menu