import React,{ useState } from 'react'
import './App.css'
import { AñadirFollow } from './assets/AñadirFollow';
import { Cabecera } from './assets/Cabecera';
import { DisaAddfanPage } from './assets/DisaAddfanPage';
import { CondListFollowers } from './assets/CondListFollowers';

function App() {
  const [follower,addFollower]=useState([]);
  const [appearAddFanPage, editAppearFanPage]=useState(false);
  const [nombFanPage, editNomFanPage]=useState("--FanPage--");
  const [changePages, editChangesPages]=useState(1);

  const changeFunPage=(e)=>{
    editChangesPages(e);
  }

  const addFanPageBo=()=>{
    editAppearFanPage(!appearAddFanPage);
  }
  return (
    <div className='major'>
        <div className='grid-AddFanPage-section'>
          {changePages==3?
          <DisaAddfanPage 
            addFanPageBo={addFanPageBo} 
            editNomFanPage={editNomFanPage}
            appearAddFanPage={appearAddFanPage}
          />
          :
          <div></div>
          }
        </div>
        <div className=''>
          {changePages==1?
          <>
          <Cabecera nomFanPage={nombFanPage} nroSeguidores={follower.length}/>
          <CondListFollowers follower={follower}/>
          </>
          :changePages==2?
          <h2>Breve</h2>
          :changePages==3?
          <>
          <Cabecera nomFanPage={nombFanPage} nroSeguidores={follower.length}/>
          <AñadirFollow follower={follower} addFollower={addFollower}/>
          <CondListFollowers follower={follower}/>
          </>
          :
          <h1>JuasJuas</h1>
          }
        </div>
        <div className='nav-bar'>
          <ul className='nav-bar-list'>
            <li className='nav-bar-btn-container nav-bar-btn-top'>
              <button
                onClick={()=>changeFunPage(1)}
                className='nav-bar-btn'
              >Ver Seguidores
              </button>
            </li>
            <li className='nav-bar-btn-container'>
              <button
                onClick={()=>changeFunPage(2)}
                className='nav-bar-btn'
              >
              Editar Seguidores
              </button>
            </li>
            <li className='nav-bar-btn-container'>
              <button
                onClick={()=>changeFunPage(3)}
                className='nav-bar-btn'
              >Añadir Seguidores
              </button>
            </li>
            <li className='nav-bar-btn-container nav-bar-btn-bottom'>
              <button
                onClick={()=>changeFunPage(4)}
                className='nav-bar-btn'
              >
              Eliminar Seguidores
              </button>
            </li>
          </ul>
        </div>
      </div>
  ) 
}

export default App