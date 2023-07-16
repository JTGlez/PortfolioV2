// Importación de imágenes
import Kaggle from '../src/assets/img/kaggle.png'
import Linkedin from '../src/assets/img/linkedin.png'
import Github from '../src/assets/img/github.png'
import Cv from '../src/assets/img/cv.png'
import Pic from '../src/assets/img/jtglez2.png'

import './assets/css/title.css';

const AboutMe = () => {
    return(

    <section class="title container">
        <img class="title__profile" src={Pic}></img>
            <div class="title__container">
                <h2 class="title__bio">Hi! My name is Jorge</h2><br></br>
            <h3 class="title__subsection">Python Developer/Data Analyst</h3>
            
        </div>

        <section className="networks">
            <ul className="networks__list">
                <li className="networks__list__item"><a className = "item__text"  href="https://www.linkedin.com/in/jtglez/">Linkedin <img className ="networks__item__link" src={Linkedin}></img></a></li>
                <li className="networks__list__item"><a className = "item__text"  href="https://github.com/JTGlez">Github <img  className ="networks__item__link" src={Github}></img> </a></li>
                <li className="networks__list__item"><a className = "item__text" href="https://www.kaggle.com/jtglez" >Kaggle <img  className ="networks__item__link" src={Kaggle}></img></a></li>
                <li className="networks__list__item"><a className = "item__text"href="https://drive.google.com/file/d/1d2TEK7lKMSEtwujeNMLISLSzvEkj93Hv/view?usp=sharing">CV<img className ="networks__item__link" src={Cv}></img></a></li>
            </ul>
        </section>
    </section>

    )
}

export default AboutMe;