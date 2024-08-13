import "./Proyectos.css";

export function Proyecto({ proyecto }) {
    return (
        <section className="proyectos">
            <div className="container">
                <h3 className="titulo">{proyecto.titulo}</h3>
                <p className="explicacion">{proyecto.descripcion}</p>
                <ul className="tecnologias__list">
                    {proyecto.tecnologias.map((element) => {
                        return (
                            <li key={element.name + Math.random() * 1000} className="tecnologias__item">
                                <img src={element.ref} alt={element.name} />
                                <p>{element.name}</p>
                            </li>
                        )
                    })}
                </ul>
                <div className="botones">
                        <a target="_blank" className="button push buttonPrincipal" href={proyecto.aplicacion}>Ir a aplicacion</a>
                        <a target="_blank" className="button push buttonSecundario" href={proyecto.repositorio}>Ir a repositorio</a>
                </div>
            </div>
            <img src={proyecto.imagen} alt="Muestra de aplicacion en pantalla de telefono" className="pantallaMuestra" />
        </section>
    )
}
