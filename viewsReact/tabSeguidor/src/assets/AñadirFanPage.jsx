import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight,faX} from '@fortawesome/free-solid-svg-icons'
import './styles/AñadirFanPage.css'
import { useState } from 'react'
export function AñadirFanPage({addFanPageBo, editNomFanPage, themePage}) {
    const [nomFanPage,nomFanPageInput]=useState("")
    const addFanPageContainer=themePage?'addFanPage-container_dark': 'addFanPage-container_ligh';
    const addFanPageLabel=themePage?'addFanPage-label_dark':'addFanPage-label_ligh'
    const addFanPageInput=themePage?'addFanPage-input_dark':'addFanPage-input_ligh'
    const addFanPageBtn=themePage?'addFanPage-btn_dark':'addFanPage-btn_ligh'
    const addFanPageIconBtn=themePage?'addFanPage-icon-btn_dark':'addFanPage-icon-btn_ligh'
    const stopSendNomFanPage=(e)=>{
        e.preventDefault()
        editNomFanPage(nomFanPage)
        nomFanPageInput("")
    }
    const editInputNomFanPage=(e)=>{
        nomFanPageInput(e.target.value)
    }
    return(
        <section className={addFanPageContainer}>
            <div>
            <form action="" onSubmit={stopSendNomFanPage}>
                <label htmlFor="fanPageName" className={addFanPageLabel}>Nombre de la Fan Page</label>
                
                <input 
                    type="text" 
                    id="fanPageName" 
                    className={addFanPageInput}
                    value={nomFanPage}
                    onChange={editInputNomFanPage}
                />
                <button className={addFanPageBtn} type='submit'>
                    <FontAwesomeIcon icon={faArrowRight} className={addFanPageIconBtn}/>
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