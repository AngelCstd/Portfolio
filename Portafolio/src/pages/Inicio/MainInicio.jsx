import { NetworkList } from "../../Components/NetworkList/NetworkList.jsx";
import "./MainInicio.css";



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
                    <a href="#contacto" className="button buttonPrincipal push">Contactame</a>
                    <NetworkList/>
                </div>
            </div>
        </main>
    )
}