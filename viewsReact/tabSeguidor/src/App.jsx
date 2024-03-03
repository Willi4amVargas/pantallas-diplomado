import React,{  useState } from 'react'
import './App.css'
import { AñadirFollow } from './assets/AñadirFollow';
import { Cabecera } from './assets/Cabecera';
import { DisaAddfanPage } from './assets/DisaAddfanPage';
import { ListFollowers } from './assets/ListFollowers';
import { ThemePage } from './assets/ThemePage';

function App() {
  const [follower,addFollower]=useState([]);
  const [appearAddFanPage, editAppearFanPage]=useState(false);
  const [themePage,changeThemePage]=useState(false);
  const [nombFanPage, editNomFanPage]=useState("--FanPage--");
  const [changePages, editChangesPages]=useState(1);
  const body= document.querySelector("body")


  const funChangeThemePage=()=>{
    changeThemePage(!themePage);
    {themePage?
      body.style.backgroundColor = "#fefefe"
      :
      body.style.backgroundColor = "#1d1d1d"
    }
  }
  const changeFunPage=(e)=>{
    editChangesPages(e);
  }

  const addFanPageBo=()=>{
    editAppearFanPage(!appearAddFanPage);
  }
  return (

    <div className='major'>
{/* //Seccion de Poner el Nombre de la Fan Page */}
        {console.log(...follower)}
        <div className='grid-AddFanPage-section'>
          {changePages==3?
          <DisaAddfanPage 
            addFanPageBo={addFanPageBo} 
            editNomFanPage={editNomFanPage}
            appearAddFanPage={appearAddFanPage}
            themePage={themePage}
          />
          :
          <div></div>
          }
          <ThemePage funChangeThemePage={funChangeThemePage} themePage={themePage}/>
        </div>
{/* //Seccion del cambio de la NAV BAR */} 


        <div className=''>
          {changePages==1?
          <>
            <Cabecera 
              nomFanPage={nombFanPage} 
              nroSeguidores={follower.length} 
              themePage={themePage}
            />
            <ListFollowers 
              follower={follower} 
              addFollower={addFollower}
              changePages={changePages} 
              themePage={themePage}
             />
          </>
          :changePages==2?
          <>
            <h1 className='styled-h1'>Modificar Registros</h1>
            <ListFollowers 
              follower={follower} 
              addFollower={addFollower} 
              changePages={changePages}
              themePage={themePage}
            />
          </>
          :changePages==3?
          <>
          <Cabecera 
            nomFanPage={nombFanPage} 
            nroSeguidores={follower.length}
            themePage={themePage}
          />
          <AñadirFollow 
            follower={follower} 
            addFollower={addFollower}
            themePage={themePage}
          />
          <ListFollowers 
            follower={follower} 
            addFollower={addFollower} 
            changePages={changePages}
            themePage={themePage}
          />
          </>
          :
          <>
          <h1 className='styled-h1'>Eliminar Registros</h1>
          <ListFollowers 
            follower={follower} 
            addFollower={addFollower} 
            changePages={changePages}
            themePage={themePage}
          />
          </>
          }
        </div>
{/* //Seccion de la NAV BAR Fija para navegacion de la pagina */}
  

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