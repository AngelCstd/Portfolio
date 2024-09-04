import { FormContact } from "../../Components/FormContact/FormContact.jsx";
import "./Contacto.css";

export function Contacto() {

    return (
        <section className="contacto">
            <h1 className="contacto__title" id="contacto">Contactame</h1>
            <FormContact/>
        </section>
    )
}