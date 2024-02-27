import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faXmark,faPencil} from '@fortawesome/free-solid-svg-icons'

export function Follower({children,follow,elimFollower, changePages, editFollower}) {
    const [friend,editFriend]=useState(true);
    const [editFwState, editFwStateEdit]=useState(true)
    const [newName, newEditName]=useState(follow.user);
    const [newDate, newEditDate]=useState(follow.date);
    const buttonText=friend?"Añadir Amigo":"Eliminar Amigo"
    const buttonClassName = friend?'fw-card-btn-add':'fw-card-btn-add fw-card-btn-elim'
    const buttonOnClick=()=>{
        editFriend(!friend);
    }
    const btnEditFwState=()=>{
        editFwStateEdit(!editFwState);
    }
    return(
        <article className="fw-card">
            <div> 
            
                <header className="fw-card-header">
                    <img 
                        src={`https://unavatar.io/${children}`}
                        className="fw-card-img"
                    />
                    <div className="fw-card-user">
                        {changePages==2?
                        <>
                        {editFwState==true?
                            <>
                            <section className="fw-card-user">
                            <input 
                                type='text'
                                className='fw-card-user-name'
                                disabled
                                value={follow.user}
                            />
                            <input
                                type="date" 
                                className='fw-card-date'
                                value={follow.date}
                                disabled 
                            />
                            <button
                                className='fw-card-btn-editFw' 
                                onClick={()=>btnEditFwState()}
                            >
                                <FontAwesomeIcon icon={faPencil} className="fw-card-btn-editFw-icon"/>
                            </button>
                            </section>
                            </>
                            :
                            <>
                            <form action="" className='fw-card-user'>
                            <input 
                                type='text'
                                className='fw-card-user-name-edit'
                                value={newName}
                                onChange={(e)=>newEditName(e.target.value)}
                            />
                            <input
                                type="date" 
                                className='fw-card-date-enable'
                                value={newDate} 
                                onChange={(e)=>newEditDate(e.target.value)}
                            />
                            <button
                                type='submit'
                                className='fw-card-btn-editFw' 
                                onClick={()=>btnEditFwState()}>
                                <FontAwesomeIcon icon={faPencil} className='fw-card-btn-editFw-icon'/>
                            </button>
                            </form>
                            
                            </>
                        }  
                        </>
                        :
                        <>
                            <strong className='fw-card-user-name'>{children}</strong>
                            <input 
                                type="date" 
                                className='fw-card-date'
                                value={follow.date} 
                                disabled
                            />
                        </>
                        }
                    </div>
                </header>
            <aside className='fw-card-asside'>
                {changePages==1?
                <button 
                    className={buttonClassName} 
                    onClick={buttonOnClick}
                >
                    {friend?
                        <FontAwesomeIcon icon={faPlus} className='fw-card-plus-btn'/>
                        :
                        <FontAwesomeIcon icon={faXmark} className='fw-card-plus-btn'/>
                    }
                {buttonText}
                </button>
                :changePages==2?
                <div></div>
                :changePages==3?
                <div></div>
                :
                <button
                    className='fw-card-elimFw-btn' 
                    onClick={()=>elimFollower(follow.id)}
                >
                    <FontAwesomeIcon icon={faXmark} className='fw-card-X-icon'/>
                </button>
                }
            </aside>
            </div>
        </article>
    )
}