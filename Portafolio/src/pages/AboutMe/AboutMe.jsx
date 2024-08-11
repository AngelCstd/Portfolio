import "./AboutMe.css"
export function AboutMe() {
    return (<>
        <main class="sobremi" id="sobremi">
            <section class="sobremi__container">
                <h1 class="sobremi__titulo">Hola, <br />Soy Angel!</h1>
                
                <a href="./archivos/CV_Angel_Castaneda.pdf" target="_blank" class="sobremi__cv">Ver CV</a>
            </section>

            <article class="article__sobremi">
                <img src="./archivos/img/Azul.png" alt="Angel con la cabeza agachada" class="article__imagen--sobremi" />
                <div class="article__container--sobremi">
                    <h2 class="article__title--sobremi">Contacto</h2>
                    <p class="article__info--sobremi">Gustavo A. Madero, CDMX</p>
                    <p class="article__info--sobremi">Luisacast.29@gmail.com</p>
                    <p class="article__info--sobremi">55 25 24 11 67</p>
                </div>
            </article>

        </main>



        <section class="resume">
            <h1>RESUMEN</h1>
            <div class="resume__aprendizaje resume__container">

                <div class="resume__aprendizaje--educacion  resume__container--lista">
                    <h2>Educación</h2>
                    <ul class="resume__lista">
                        <li class="resume__item">
                            <h3 class="resume__ano">2023</h3>
                            <div class="resume__subcontainer">
                                <h4 class="resume__empresa">Universidad Nacional Autonoma de México (UNAM)</h4>
                                <p class="resume__aprendizajeobtenido">Ingenieria en computación (Actualmente segundo semestre)</p>
                            </div>
                        </li>
                        <li class="resume__item">
                            <h3 class="resume__ano">2022 - 2023</h3>
                            <div class="resume__subcontainer">
                                <h4 class="resume__empresa">Oracle Next Education</h4>
                                <p class="resume__aprendizajeobtenido">Graduado del programa como programador front end junior</p>
                            </div>
                        </li>
                        <li class="resume__item">
                            <h3 class="resume__ano">2021 - 2022</h3>
                            <div class="resume__subcontainer">
                                <h4 class="resume__empresa">Microsoft - Launch X</h4>
                                <p class="resume__aprendizajeobtenido">Finalice la beca con exito</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="resume__aprendizaje--experiencia  resume__container--lista">
                    <h2>Experiencia</h2>
                    <ul class="resume__lista">
                        <li class="resume__item">
                            <h3 class="resume__ano">2022</h3>
                            <div class="resume__subcontainer">
                                <h4 class="resume__empresa">Freelance</h4>
                                <p class="resume__aprendizajeobtenido">Diseño y desarrollo front end de un catalogo para una distribuidora
                                </p>
                            </div>
                        </li>
                        <li class="resume__item">
                            <h3 class="resume__ano">2022</h3>
                            <div class="resume__subcontainer">
                                <h4 class="resume__empresa">Proyecto personal</h4>
                                <p class="resume__aprendizajeobtenido">Creación de menu interactivo de un restaurante</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

            <div class="resume__habilidades resume__container">

                <table class="resume__table">
                    <thead class="resume__tablehead">
                        <tr>
                            <th class="resume__tableheader">Idioma</th>
                            <th class="resume__tableheader">Nivel</th>
                        </tr>
                    </thead>
                    <tbody class="resume__tablebody">
                        <tr class="resume__tablerow">
                            <td class="resume__tabledata">Inglés</td>
                            <td class="resume__tabledata">B1</td>
                        </tr>
                        <tr class="resume__tablerow">
                            <td class="resume__tabledata">Español</td>
                            <td class="resume__tabledata">Nativo</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Habilidades tecnicas</h2>
                <ul class="resume_habilidades__list">
                    <li class="resume_habilidades__item">
                        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                                alt="CSS" />
                        </a>
                        <p>CSS</p>
                    </li>
                    <li class="resume_habilidades__item">
                        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                                alt="HTML" />
                        </a>
                        <p>HTML</p>
                    </li>
                    <li class="resume_habilidades__item">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                            <img
                                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                                alt="JavaScript" />
                        </a>
                        <p>JavaScript</p>
                    </li>
                    <li class="resume_habilidades__item">
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                                alt="React" />
                        </a>
                        <p>React</p>
                    </li>
                    <li class="resume_habilidades__item">
                        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="GIT" />
                        </a>
                        <p>GIT</p>
                    </li>
                    <li class="resume_habilidades__item">
                        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                            <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" />
                        </a>
                        <p>Figma</p>
                    </li>
                    <li class="resume_habilidades__item">
                        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                            <img
                                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                                alt="NodeJS" />
                        </a>
                        <p>NodeJS</p>
                    </li>
                    <li class="resume_habilidades__item">
                        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                                alt="MySQL" />
                        </a>
                        <p>MySQL</p>
                    </li>
                    <li class="resume_habilidades__item">
                        <a href="https://www.java.com" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                                alt="Java" />
                        </a>
                        <p>Java</p>
                    </li>
                </ul>
            </div>
        </section>
    </>
    )
}