import './styleMenu.css'
import { useChangeLocation } from '../../Hooks/useCahngeLocation'

const Menu = () => {

    const changeLocation = useChangeLocation()
    
                

    return (
        <div className="menu">
            <h1>planer weselny</h1>
            <button onClick={ () => changeLocation('stronaGlowna')}>Strona główna</button>
            <button onClick={ () => changeLocation('planZadan')}>Plan zadań</button>
            <button onClick={ () => changeLocation('budzet')}>Budżet</button>
            {/* <button onClick={() => window.history.pushState(nextState, nextTitle, 'http://localhost:3000/goscie')}>Goście</button>
            <button onClick={() => window.history.pushState(nextState, nextTitle, 'http://localhost:3000/')}>Wyloguj</button> */}

        </div>
    )
}

export default Menu