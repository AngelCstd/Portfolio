export function Proyecto({proyecto}) {
    return (
        <section className="proyectos">
            <div className="container">
                <h1 className="titulo">{proyecto.titulo}</h1>
                <p className="explicacion">{proyecto.descripcion}</p>
                <ul className="tecnologias__list">
                    {proyecto.tecnologias.map((element) => {
                        return (
                            <li className="tecnologias__item">
                                <img src={element.ref} alt={element.name} />
                                <p>{element.name}</p>
                            </li>
                        )
                    })}
                </ul>
                <div className="botones">
                    <a target="_blank" href={proyecto.repositorio}>Ir a repositorio</a>
                    <a target="_blank" href={proyecto.aplicacion}>Ir a aplicacion</a>
                </div>
            </div>
            <img src={proyecto.imagen} alt="Muestra de aplicacion en pantalla de telefono" className="pantallaMuestra"/>
        </section>
    )
}
