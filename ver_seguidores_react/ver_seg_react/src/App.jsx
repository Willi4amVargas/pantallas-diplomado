import React,{ useState } from 'react'
import './App.css'
import { AñadirFollow } from './assets/AñadirFollow';
import { Cabecera } from './assets/Cabecera';
import { ListFollowers } from './assets/ListFollowers';
import { AñadirFanPage } from './assets/AñadirFanPage';

function App() {
  const [follower,addFollower]=useState([])
  const [inicioSesion, cambiarInicioSesion]=useState(false);
  
  const iniciarSesion=()=>{
    cambiarInicioSesion(!inicioSesion);
  }
  return (
      <div className='principal'>
        <div className='babo'></div>
        <div className='baba'>
          <Cabecera fanPage="For Real" nroSeguidores={follower.length}/>
          <AñadirFollow follower={follower} addFollower={addFollower}/>
          <ListFollowers follower={follower}></ListFollowers>
        </div>
        <div className='brsa'></div>
      </div>
  )
}

export default App
