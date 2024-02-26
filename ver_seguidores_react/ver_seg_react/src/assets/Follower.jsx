import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
export function Follower({children,date}) {
    const [friend,editFriend]=useState(true);
    const buttonText=friend?"Añadir Amigo":"Eliminar Amigo"
    const buttonClassName = friend?'fw-card-btn-add':'fw-card-btn-add fw-card-btn-elim'
    const buttonOnClick=()=>{
        editFriend(!friend);
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
                    <strong className='fw-card-user-name'>{children}</strong>
                    <input 
                        type="date" 
                        className='fw-card-date'
                        value={date} 
                        disabled
                    />
                </div>
            </header>
            <aside className='fw-card-asside'> 
                <button className={buttonClassName} onClick={buttonOnClick}>
                    {friend?
                        <FontAwesomeIcon icon={faPlus} className='fw-card-plus-btn'/>
                        :
                        <FontAwesomeIcon icon={faXmark} className='fw-card-plus-btn'/>
                    }
                    
                {buttonText}
                </button>
            </aside>
            </div>
        </article>
    )
}