import './assets/css/formcontacto.css';
import Email from '../src/assets/img/email.png'

const Contact = () => {
    return (
        <section className="formcontacto">
            <div className="formcontacto__text">
                <h2 className="formcontacto__title">Contact</h2>
                <h3 className="formcontacto__subtext">👋 Would you like to get in touch with me?</h3> <br/>
                <h3 className="formcontacto__subtext">Please complete the next form and I'll contact you ASAP.</h3>
                <img src={Email} alt="" className="formcontacto__img" />
                <div className="row">
                <form className="col-xs-4 col-xs-offset-4" id="form" action="https://formsubmit.co/42bc94db8ca640ee98618f8197a56e5e" method="POST">
                    <div className="formcontacto__form">
                        <input className="formcontacto__input" type="text" name="name" id = "name" autofocus required autocomplete="off"></input>
                        <label className="floating-label">Name</label>
                    </div>

                    <div className="formcontacto__form">
                        <input className="formcontacto__input" type="text" name="email" id = "email" autofocus required autocomplete="off"></input>
                        <label className="floating-label">Email</label>
                    </div>

                    <div className="formcontacto__form">
                        <input className="formcontacto__input" type="text" name="subject" id = "subject"autofocus required autocomplete="off"></input>
                        <label className="floating-label">Subject</label>
                    </div>

                    <div className="formcontacto__form__send">
                        <textarea className="formcontacto__input" rows="5" cols="40" name="message" id="mensaje" placeholder="Type your message" required></textarea>
                        <button type="submit" className="formcontacto__boton">Send</button>
                    </div>
                    <input type="hidden" name="_next" value="http://localhost:5175/submit"></input>
                </form>
            </div>
            </div>
        </section>
        
    )
}

export default Contact;