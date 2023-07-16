
import Kiana from '../src/assets/img/kiana.gif'

import './assets/css/banner.css';
const Banner = () => {
    return(

        <section className="banner" id = "AboutMe">
            <h2 className="banner__titulo">About Me</h2>
            <p className="banner__texto">I'm a student of Computer Engineering at FI UNAM. My passion lies in AI-based algorithms, data analytics, databases, and blockchain, and I keep myself up-to-date with the latest advancements in mainstream CPUs and GPUs.</p>
            <p class="banner__texto">
            My main area of interest is Data Mining with AI, specifically machine learning. I also enjoy exploring the latest AI advances related to AI-Generated contents using tools  like Stable Diffusion, ChatGPT and RVC.</p>
            <img class = "banner__gif" src={Kiana} alt=""></img>
        </section>

        
    )
}

export default Banner;