import {faAddressBook} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export function AñadirFollow({follower, addFollower}) {
    const [nameFollower,addNameFollower]=useState("");
    const [userDate, addUserDate]=useState("");
    const stopSending=(e)=>{
        e.preventDefault()
        console.log("Estoy previniendo el envio :D");
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
    return(
        <>
        <form action="" className="addFollow" onSubmit={stopSending}>
            <div className="addFollow-container-input">
                <label htmlFor="user" className="addFollow-label">Ingresar Nuevo Seguidor</label>
                <input 
                    name='user'
                    id="user" 
                    type="text" 
                    className="addFollow-input"
                    value={nameFollower}
                    onChange={changeInputValue}
                />
                <input 
                    type="date" 
                    name="userDate" 
                    id="userDate" 
                    className='addFollow-input-date'
                    value={userDate}
                    onChange={changeInputDate}
                />
            </div>
            <button type="submit" className="addFollow-btn">
                <FontAwesomeIcon icon={faAddressBook} className="addFollow-btn-icon"/>
            </button>
        </form>
        </>
    )
}