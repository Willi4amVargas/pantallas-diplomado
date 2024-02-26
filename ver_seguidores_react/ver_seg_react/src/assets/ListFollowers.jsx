import { Follower } from "./Follower"

export function ListFollowers({follower, addFollower,changePages}) {
    const elimFollower=(id)=>{
        addFollower(follower.filter((e)=>{
            if (e.id !== id) {
                return e;
            } else{
                return;
            }
        }))
    }
    return(
        <>
        {
        follower.map((follow)=>{
            return(
            <Follower 
                key={follow.id}
                follow={follow}
                date={follow.date}
                elimFollower={elimFollower}
                changePages={changePages}
            >{follow.user}</Follower>
            )
        })
        }
        </>
    )
}