import './styles/Cabecera.css'
export function Cabecera({nomFanPage,nroSeguidores,themePage}){
    const seguidores=<span style={{fontWeight:"bold"}}>Seguidores</span>
    const noOneFollowing=<span style={{fontWeight:"bold", fontSize:"medium"}} className="fanPage-numb-followers">No hay seguidores :c</span>
    

    const fanPageNameTitle=themePage?'fanPage-name-title_dark':'fanPage-name-title_ligh'
    return(
            <article className="fanPage">
                <img src="https://random.imagecdn.app/500/150" className="fanPage-img"/>
                <div className="fanPage-text-bot-dwn">
                    <div className="fanPage-text-align-under">
                        <span className={fanPageNameTitle}>{nomFanPage}</span>
                        {nroSeguidores>0?
                        <span className="fanPage-numb-followers">{seguidores} {nroSeguidores}</span>
                        :
                            noOneFollowing
                        }
                    </div>
                </div>
            </article>
    )
}