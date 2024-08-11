export function Proyecto() {
    return (
        <section class="proyectos">
        <div class="container">
            <h1 class="titulo">Codificador</h1>
            <p class="explicacion">Esta aplicación fue creada con la finalidad de poner en practica mis habilidades con
                algunas tecnologias como html, css y javascript, consiste en una aplicacion que al ingresar un mensaje
                puedas codificarlo y si recibes un mensaje igual puedes descodificarlo</p>
            <ul class="tecnologias__list">
                <li class="tecnologias__item">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        alt="CSS">
                    <p>CSS</p>
                </li>
                <li class="tecnologias__item">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                        alt="HTML">
                    <p>HTML</p>
                </li>
                <li class="tecnologias__item">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        alt="JavaScript">
                    <p>JavaScript</p>
                </li>
            </ul>
            <div class="botones">
                <a href="https://github.com/AngelCstd/codificador">Ir a repositorio</a>
                <a href="https://angelcstd.github.io/codificador/">Ir a aplicacion</a>
            </div>
        </div>
        <img src="archivos/img/CodificadorTemplate.png" alt="Muestra de aplicacion en pantalla de telefono" class="pantallaMuestra">
    </section>
    <!-- Componente Proyectos-- >
        <section class="proyectos fondo__azul">
            <div class="container">
                <h1 class="titulo">Portafolio</h1>
                <p class="explicacion">Esta aplicación la creamos con el fin de mostrar mis proyectos y las tecnologias que se usar para algun posible reclutador, cliente o colega. Tambien muestro algunas de mis habilidades que tengo al programar y pueden acceder iincluso al codigo de algunos de mis proyectos que podran ver dentro de esta aplicación o hasta las mismas aplicaciones</p>
                <ul class="tecnologias__list">
                    <li class="tecnologias__item">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="CSS">
                            <p>CSS</p>
                    </li>
                    <li class="tecnologias__item">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="HTML">
                            <p>HTML</p>
                    </li>
                </ul>
                <div class="botones">
                    <a href="https://github.com/AngelCstd/portafolio">Ir a repositorio</a>
                    <a href="https://angelcstd.github.io/portafolio/">Ir a aplicacion</a>
                </div>
            </div>
            <img src="archivos/img/PortfolioProyect.png" alt="Muestra de aplicacion en pantalla de telefono" class="pantallaMuestra">
        </section>
    )
}