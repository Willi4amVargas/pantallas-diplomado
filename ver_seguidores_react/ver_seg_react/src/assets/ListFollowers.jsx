import { Follower } from "./Follower"

export function ListFollowers({follower}) {
    return(
        <>
        {follower.length>0?
        follower.map((follow)=>{
            return(
            <Follower key={follow.id} date={follow.date}>{follow.user}</Follower>
            )
        })
        :
        <h1 className="listFollow-noFollowers">No hay seguidores actualmente</h1>
        }
        </>
    )
}