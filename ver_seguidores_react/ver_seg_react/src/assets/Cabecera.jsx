export function Cabecera({fanPage,nroSeguidores}){
    const seguidores=<span style={{fontWeight:"bold"}}>Seguidores</span>

    return(
        <section className="fanPage">
            <article>
                <img src="https://random.imagecdn.app/500/150" className="fanPage-img"/>
            </article>
            <aside className="fanPage-title">
                <span className="fanPage-name-title">{fanPage}</span>
                <span className="fanPage-numb-followers">{seguidores} {nroSeguidores}</span>
            </aside>
        </section>
    )
}