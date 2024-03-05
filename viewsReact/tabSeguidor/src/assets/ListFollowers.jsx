import { Follower } from "./Follower"
import './styles/ListFollowers.css'

export function ListFollowers({follower, addFollower, changePages,themePage}) {
    const elimFollower=(id)=>{
        addFollower(follower.filter((e)=>{
            if (e.id !== id) {
                return e;
            } else{
                return;
            }
        }))
    }
    const editFollower=(id,newFwName,newFwDate)=>{
        addFollower(follower.map((e)=>{
            if (e.id===id) {
                return{...follower,user:newFwName,date:newFwDate}
            }
            return e;
        }))
    }
    const listFollowNoFollowers=themePage?'listFollow-noFollowers_dark':'listFollow-noFollowers_ligh'
    return(
        <>
        {follower.length>0?
            <div className='follower-grid'>
                {
                    follower.map((follow)=>{
                    return(
                    <Follower
                        key={follow.id}
                        changePages={changePages}
                        follow={follow}
                        elimFollower={elimFollower}
                        editFollower={editFollower}
                        themePage={themePage}
                    >{follow.user}
                    </Follower>
                    )
                    })
                }
            </div>
            :
            <h1 className={listFollowNoFollowers}>No hay seguidores actualmente</h1>
        }    
        </>
    )
}