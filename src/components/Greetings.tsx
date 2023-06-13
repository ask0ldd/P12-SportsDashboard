import '../styles/Greetings.css'

interface props {
    firstname : string | undefined
}

/**
 * Component displaying some greeting tailored for the user.
 * @Component
 * @param {string} firstname - user's firstname.
 * @return ( <Greetings firstname={firstname}/> )
 */
const Greetings = ({firstname}:props) => {
    return(
        <div className="greetingsContainer">
            <p className='hello'>Bonjour <span>{firstname}</span></p>
            <p className='congrats'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default Greetings