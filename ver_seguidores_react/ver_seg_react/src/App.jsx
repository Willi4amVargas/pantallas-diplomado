import React,{ useState } from 'react'
import './App.css'
import { AñadirFollow } from './assets/AñadirFollow';
import { Cabecera } from './assets/Cabecera';
import { ListFollowers } from './assets/ListFollowers';
import { AñadirFanPage } from './assets/AñadirFanPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

function App() {
  const [follower,addFollower]=useState([]);
  const [appearAddFanPage, editAppearFanPage]=useState(false);
  const [nombFanPage, editNomFanPage]=useState("--FanPage--")

  const addFanPageBo=()=>{
    editAppearFanPage(!appearAddFanPage);
  }
  return (
      <div className='major'>
        <div className='grid-AddFanPage-section'>
          {appearAddFanPage?
          <AñadirFanPage 
            addFanPageBo={addFanPageBo} 
            editNomFanPage={editNomFanPage}
          />
          :
          <button onClick={addFanPageBo} className='addFanPage-btn-appear'>
            <FontAwesomeIcon icon={faArrowRight} className='addFanPage-btn-apear-icon'/>
          </button>
          }
        </div>
        <div className=''>
          <Cabecera nomFanPage={nombFanPage} nroSeguidores={follower.length}/>
          <AñadirFollow follower={follower} addFollower={addFollower}/>
          {follower.length>0?
            <div className='follower-grid'><ListFollowers follower={follower}></ListFollowers></div>
            :
            <h1 className="listFollow-noFollowers">No hay seguidores actualmente</h1>
          }
          
        </div>
        <div className=''></div>
      </div>
  )
}

export default App
