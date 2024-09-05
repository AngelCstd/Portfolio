import { useEffect, useState } from "react"
import "./Drawer.css"

export function DrawerP({ onClose, links }) {
    const [isVisible, setIsVisible] = useState(false)
    let startY = 0;

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setIsVisible(true)
        }, 10);

        return () => clearTimeout(timeoutID)
    }, [])

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => { onClose(false) }, 500)
    }

    const handleTouchStart = (e) => {
        startY = e.touches[0].clientY;
    }

    const handleTouchMove = (e) => {
        const currentY = e.touches[0].clientY;
        const deltaY = currentY - startY;

        if (deltaY > 100) {
            handleClose();
        }
    }

    return (
        <div
            className={`dialogOverlay ${isVisible && "active"}`}
            onClick={handleClose}
        >
            <div className="dialogContent"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="dialogHandle">
                    <span></span>
                </div>
                <ul className="drawer__ul" id="menu">
                    {links.map(obj => {
                        return (<li key={obj.ref + Math.random() * 100} className="drawer__li">
                            <a className="drawer__a" onClick={handleClose} href={obj.ref} >{obj.title}</a>
                        </li>)
                    })}
                </ul>
            </div>
        </div>)
}
