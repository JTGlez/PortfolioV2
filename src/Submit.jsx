import './assets/css/submit.css';
import Bronya from '../src/assets/img/bronya.gif'

const Submit = () => {
    return (
        <>
            <section class="submit">
                <img src= {Bronya} alt="" class="submit__img"></img>
                <h3 class="submit__text">Thank you! Your message has been sent.</h3>
                <form action="/" class="submit__return"><input class = "submit__button" type="submit" value ="Return to Home"></input></form>
            </section>
            <section>
            <div class="spacing">
                </div>
            </section>
            
        </>

        
    )
}

export default Submit;