import { ListFollowers } from "./ListFollowers"
export function CondListFollowers({follower, addFollower, changePages}) {
    return(
        <>
        {follower.length>0?
            <div className='follower-grid'>
                <ListFollowers 
                    follower={follower} 
                    addFollower={addFollower} 
                    changePages={changePages}>
                </ListFollowers>
            </div>
            :
            <h1 className="listFollow-noFollowers">No hay seguidores actualmente</h1>
        }
        </>
    )
}