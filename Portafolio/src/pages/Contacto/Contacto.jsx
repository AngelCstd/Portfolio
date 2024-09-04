import { FormContact } from "../../Components/FormContact/FormContact.jsx";
import { NetworkList } from "../../Components/NetworkList/NetworkList.jsx";
import "./Contacto.css";

export function Contacto() {

    return (
        <section className="page__contacto">
            <section className="contacto">
            <h1 className="contacto__title textNaranja" id="contacto">¿Quieres contactarme?</h1>
            <div className="container">
                <h3>Contactame en
                    <span className="textNaranja"> cualquier momento</span>
                </h3>
                <p>
                    Si tienes alguna pregunta, un proyecto o solo quieres decir hola, puedes mandarme un correo:
                </p>
                <a 
                href="mailto:luisacast.29@gmail.com" 
                className="textNaranja">
                    luisacast.29@gmail.com
                </a>
            </div>
            <div className="container form">
                <p>Llena este formulario y yo me pondre en contacto contigo una vez que me desocupe!</p>
            <FormContact />
            </div>
            <div className="container">
                <h3><span className="textNaranja">Gracias</span> por tu tiempo</h3>
                <p>Recuerda que tambien puedes seguirme y ver en que estoy trabajando actualmente o si deseas dejarme un mensaje en mis redes sociales</p>
                <NetworkList />
            </div>
            </section>
        </section>
    )
}