import { ListFollowers } from "./ListFollowers"
export function CondListFollowers({follower}) {
    return(
        <>
        {follower.length>0?
            <div className='follower-grid'><ListFollowers follower={follower}></ListFollowers></div>
            :
            <h1 className="listFollow-noFollowers">No hay seguidores actualmente</h1>
        }
        </>
    )
}