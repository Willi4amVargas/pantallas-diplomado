import { Follower } from "./Follower"

export function ListFollowers({follower}) {
    return(
        <>
        {
        follower.map((follow)=>{
            return(
            <Follower 
                key={follow.id}
                date={follow.date}
            >{follow.user}</Follower>
            )
        })
        }
        </>
    )
}