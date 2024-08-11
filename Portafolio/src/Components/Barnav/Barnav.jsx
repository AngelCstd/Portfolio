import "./Barnav.css";
import { IconLogo, IconMenu } from "../../assets/Icons.jsx";
import { DrawerP } from "../Drawer/Drawer.jsx";
import React, { useState, useEffect } from 'react';

const links = [
    {
        ref:"#home",
        title:"Inicio"
    },
    {
        ref: "#about",
        title:"Sobre mi"
    },
    {
        ref: "#proyectos",
        title:"Proyectos"
    },
    {
        ref: "#contacto",
        title:"Contacto"
    }
]

export function Barnav() {
    const [drawer, setDrawer] = useState(false)

    useEffect(() => {
        if (drawer) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [drawer]);

    function handleDrawer(abrir) {
        setDrawer(abrir)
    }

    return (<>
        <header className="menu__header">
            <nav className="menu__nav">
                <a className="menu__nombre" href="#home">
                    <IconLogo />
                    AngelCstd
                </a>
                <ul className="menu__ul" id="menu">
                {links.map(obj=>{
                        return(<li key={obj.ref + Math.random()*100} className="menu__li">
                            <a className="menu__a" href={obj.ref} >{obj.title}</a>
                        </li>)
                    })}
                </ul>
                <button className="drawerTrigger push" onClick={()=>{handleDrawer(true)}}>
                    <IconMenu />
                </button>
            </nav>
        </header>
        {drawer && <DrawerP onClose={handleDrawer} links={links}  />}
    </>
    )
}
