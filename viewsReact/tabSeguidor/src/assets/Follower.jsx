import {  useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faXmark,faPencil} from '@fortawesome/free-solid-svg-icons'
import './styles/Follower.css'

export function Follower({children,follow,elimFollower, changePages, editFollower,themePage}) {
    const [friend,editFriend]=useState(true);
    const [editFwState, editFwStateEdit]=useState(false)
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
    const stopSendEditFw = (e)=>{
        /* e.preventDefault() */
        editFollower(follow.id, newName,newDate)
    }
    const fwCard=themePage?'fw-card_dark':'fw-card_ligh'
    const fwCardUserName=themePage?'fw-card-user-name_dark':'fw-card-user-name_ligh'
    const fwCardDate=themePage?'fw-card-date_dark':'fw-card-date_ligh'
    const fwCardBtnEditFwIcon=themePage?'fw-card-btn-editFw-icon_dark':'fw-card-btn-editFw-icon_ligh'
    const fwCardElimFwBtn=themePage?'fw-card-elimFw-btn_dark':'fw-card-elimFw-btn_ligh'
    return(
        <article className={fwCard}>
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
                                className={fwCardUserName}
                                disabled
                                value={follow.user}
                            />
                            <input
                                type="date" 
                                className={fwCardDate}
                                value={follow.date}
                                disabled 
                            />
                            <button
                                className='fw-card-btn-editFw' 
                                onClick={()=>{stopSendEditFw(),btnEditFwState()}}
                            >
                                <FontAwesomeIcon icon={faPencil} className={fwCardBtnEditFwIcon}/>
                            </button>
                            </section>
                            </>
                            :
                            <>
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
                                onClick={()=>{stopSendEditFw(),btnEditFwState()}}>
                                <FontAwesomeIcon icon={faPencil} className='fw-card-btn-editFw-icon'/>
                            </button>
                            </>
                            
                        }  
                        </>
                        :
                        <>
                            <strong className={fwCardUserName}>{children}</strong>
                            <input 
                                type="date" 
                                className={fwCardDate}
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
                    className={fwCardElimFwBtn} 
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