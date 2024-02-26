import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight,faX} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
export function AñadirFanPage({addFanPageBo, editNomFanPage}) {
    const [nomFanPage,nomFanPageInput]=useState("")
    const stopSendNomFanPage=(e)=>{
        e.preventDefault()
        editNomFanPage(nomFanPage)
        nomFanPageInput("")
    }

    const editInputNomFanPage=(e)=>{
        nomFanPageInput(e.target.value)
        console.log(nomFanPage);
    }
    return(
        <section className='addFanPage-container'>
            <div>
            <form action="" onSubmit={stopSendNomFanPage}>
                <label htmlFor="fanPageName" className="addFanPage-label">Nombre de la Fan Page</label>
                
                <input 
                    type="text" 
                    id="fanPageName" 
                    className="addFanPage-input"
                    value={nomFanPage}
                    onChange={editInputNomFanPage}
                />
                <button className='addFanPage-btn' type='submit'>
                    <FontAwesomeIcon icon={faArrowRight} className='addFanPage-icon-btn'/>
                </button>
            </form>
            </div>
            <div className='addFanPage-container-btn'>
                <button 
                    onClick={addFanPageBo}
                    className='quitAddFanPage-btn'
                >
                    <FontAwesomeIcon icon={faX} className='quitAddFanPage-icon'/>
                </button>
            </div>
        </section>
    )
}