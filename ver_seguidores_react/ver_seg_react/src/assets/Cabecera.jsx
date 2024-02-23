export function Cabecera({fanPage,nroSeguidores}){

    return(
        <section className="colorPrueba">
            <article>
                <img src="https://random.imagecdn.app/500/150" className="img-width"/>
            </article>
            <aside className="fanPage-title">
                <h1>{fanPage}</h1>
                <h4>{nroSeguidores}</h4>
            </aside>
        </section>
    )
}