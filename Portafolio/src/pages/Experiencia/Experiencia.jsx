import { Proyecto } from "../../Components/Proyectos/Proyectos.jsx";
import "./Experiencia.css"
const proyectos = [
    {
        titulo: "Acomodar Horarios",
        descripcion: "Cree esta aplicación con la finalidad de ayudar a la comunidad estudiantil ya que por experiencia el buscar la forma de que tus horarios se acomoden de forma que no te toquen clases a la misma hora puede ser dificil, de esta manera solo necesitaras ingresar los horarios y ver todas las opciones que tienes disponibles",
        repositorio: "https://github.com/AngelCstd/AcomodarHorarios",
        aplicacion: "https://angelcstd.github.io/acomodarHorarios/",
        imagen:"https://angelcstd.github.io/portafolio/archivos/img/AcomodarHorarios-proyect.png",
        tecnologias: [
            {
                ref: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
                name: "TypeScript"
            },
            {
                ref: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
                name: "CSS"
            },
            {
                ref: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                name: "HTML"
            }
        ]
    },
    {
        titulo: "Portafolio",
        descripcion: "Esta aplicación la creamos con el fin de mostrar mis proyectos y las tecnologias que se usar para algun posible reclutador, cliente o colega. Tambien muestro algunas de mis habilidades que tengo al programar y pueden acceder iincluso al codigo de algunos de mis proyectos que podran ver dentro de esta aplicación o hasta las mismas aplicaciones",
        repositorio: "https://github.com/AngelCstd/portafolio",
        aplicacion: "https://angelcstd.github.io/portafolio/",
        imagen:"https://angelcstd.github.io/portafolio/archivos/img/PortfolioProyect.png",
        tecnologias: [
            {
                ref: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
                name: "CSS"
            },
            {
                ref: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                name: "HTML"
            }
        ]
    },
    {
        titulo: "Codificador",
        descripcion: "Esta aplicación fue creada con la finalidad de poner en practica mis habilidades con algunas tecnologias como html, css y javascript, consiste en una aplicacion que al ingresar un mensaje puedas codificarlo y si recibes un mensaje igual puedes descodificarlo",
        repositorio: "https://github.com/AngelCstd/codificador",
        aplicacion: "https://angelcstd.github.io/codificador/",
        imagen: "https://angelcstd.github.io/portafolio/archivos/img/CodificadorTemplate.png",
        tecnologias: [
            {
                ref: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
                name: "CSS"
            },
            {
                ref: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                name: "HTML"
            },
            {
                ref: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                name: "Javascript"
            }
        ]
    }
]

export function Experiencia() {
    return (
        <section id="experiencia" className="experiencia">
            {proyectos.map((proyecto)=>{
                return(
                    <Proyecto key={Math.random()*1000} proyecto={proyecto}/>
                )
            })}
        </section>
    )
}