import { IconGitHub, IconInstagram, IconLinkedin } from "../../assets/Icons";
import "./MainInicio.css";

const network = [
    {
        ref: "https://github.com/AngelCstd",
        icon: <IconGitHub tamano={24} />
    },
    {
        ref: "https://www.linkedin.com/in/angelcstd/",
        icon: <IconLinkedin tamano={24} />
    },
    {
        ref: "https://instagram.com/angelcstd",
        icon: <IconInstagram tamano={24} />
    }
]

export function MainInicio() {
    return (
        <main className="hero" id="home">
            <header className="hero__container">
                <img className="hero__perfil" src="https://angelcstd.github.io/portafolio/archivos/img/inicio.jpg"/>
                <div className="hero__container--profile">
                    <h1 className="hero__bio">Soy Angel Castañeda!</h1>
                    <h3 className="hero__bio--info">
                        Desarrollador <span className="textNaranja">FrontEnd</span>
                    </h3>
                </div>
            </header>
            <div className="hero__container">
                <p className="hero__parrafo">
                    Tengo <span className="textNaranja">2 años de experiencia</span> en el sector, con tecnologias como <span className="textNaranja">React, NodeJs, TypeScript y JavaScript.</span> He realizado proyectos exitosos para negocios locales y actualmente busco certificarme por parte de <span className="textNaranja">Google en diseño UX</span>
                </p>
                <div className="hero__container--network">
                    <a href="#about" className="button buttonPrincipal push">Contactame</a>
                    <ul className="hero__network">
                        {network.map((obj) => {
                            return (
                                <li key={obj.ref + Math.random() * 1000} className="hero__network_item">
                                    <button className="push">
                                    <a href={obj.ref}>
                                        {obj.icon}
                                    </a>
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </main>
    )
}