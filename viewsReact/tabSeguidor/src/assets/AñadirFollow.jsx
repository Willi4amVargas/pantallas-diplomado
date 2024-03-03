import {faAddressBook} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import './styles/AñadirFollow.css'

export function AñadirFollow({follower, addFollower,themePage}) {
    const [nameFollower,addNameFollower]=useState("");
    const [userDate, addUserDate]=useState("");
    const stopSending=(e)=>{
        e.preventDefault()
        addFollower(
            [
                ...follower,
                {
                    id:uuidv4(),
                    date:userDate,
                    user:nameFollower,
                    status:"A"
                }
            ]
        )
        addNameFollower("");
        addUserDate("");
    }
    const changeInputValue=(e)=>{
        addNameFollower(e.target.value);
    }
    const changeInputDate=(e)=>{
        addUserDate(e.target.value);
    }
    const addFollow=themePage?'addFollow_dark':'addFollow_ligh'
    const addFolloLabel=themePage?'addFollow-label_dark':'addFollow-label_ligh'
    const addFollowInput=themePage?'addFollow-input_dark':'addFollow-input_ligh'
    const addFollowInputDate=themePage?'addFollow-input-date_dark':'addFollow-input-date_ligh'
    const addFollowBtnIcon=themePage?'addFollow-btn-icon_dark':'addFollow-btn-icon_ligh'
    return(
        <>
        <form action="" className={addFollow} onSubmit={stopSending}>
            <div className="addFollow-container-input">
                <label htmlFor="user" className={addFolloLabel}>Ingresar Nuevo Seguidor</label>
                <input 
                    name='user'
                    id="user" 
                    type="text" 
                    autoComplete="off"
                    maxLength={20}
                    className={addFollowInput}
                    value={nameFollower}
                    onChange={changeInputValue}
                />
                <input 
                    type="date" 
                    name="userDate" 
                    id="userDate" 
                    className={addFollowInputDate}
                    value={userDate}
                    onChange={changeInputDate}
                />
            </div>
            <button type="submit" className="addFollow-btn">
                <FontAwesomeIcon icon={faAddressBook} className={addFollowBtnIcon}/>
            </button>
        </form>
        </>
    )
}