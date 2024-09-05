import { useEffect, useState } from "react"
import "./Aviso.css"

export function Aviso({ onClose }) {

    let [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timeOutVisible = setTimeout(() => {
            setIsVisible(true)
        }, 10)
        const timeOutClose = setTimeout(() => {
            handleClose()
        }, 3000);

        return () => {
            clearTimeout(timeOutVisible)
            clearTimeout(timeOutClose)
        }
    }, [])

    const handleClose = ()=>{
        setIsVisible(false)
        setTimeout(() => {
            onClose()
        }, 500);
    }

    return (
        <div className={`dialogOverlay ${isVisible && "active"}`}>
            <div className="aviso">
                <h4>Tu mensaje se envio con <span className="textNaranja"> exito</span></h4>
                <p>Muchas gracias por tu mensaje, te contactare lo mas pronto que pueda</p>
            </div>
        </div>
    )
}