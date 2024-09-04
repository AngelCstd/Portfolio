import { useState } from "react";
import "./FormContact.css"

export function FormContact() {

    let [formData, setFormData] = useState({
        name: "",
        email: "",
        mensaje: ""
    })

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            mensaje: ""
        })
    }

    return (
        <form>
            <label>
                Nombre:
                <input
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={formData.name}
                    placeholder="Ingresa tu nombre..."
                    required />
            </label>
            <label>
                Correo:
                <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={formData.email}
                    autoComplete="username"
                    placeholder="Ingresa tu correo..."
                    required />
            </label>
            <label>
                Mensaje:
                <textarea
                    name="mensaje"
                    onChange={onChange}
                    value={formData.mensaje}
                    placeholder="Ingresa tu mensaje..." />
            </label>
            <button
                type="submit"
                className="button buttonPrincipal">
                Enviar
            </button>
            <button type="button"
                className="button buttonSecundario"
                onClick={handleReset}>
                Reset
            </button>
        </form>
    )
}