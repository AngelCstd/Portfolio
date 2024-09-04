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

    const handleSubmit = async (e) => {
        e.preventDefault()

        const URLZap = "https://hooks.zapier.com/hooks/catch/20013091/2teb6ux/"

        try {
            const response = await fetch(URLZap, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            console.log(response)
            if (response.ok) {
                console.log("Correo enviado con exito")
            } else {
                console.log("HUBO ERROR")
            }
        }
        catch (error) {
            console.error("Error: ", error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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