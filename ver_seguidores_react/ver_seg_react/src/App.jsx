import React,{ useState } from 'react'
import './App.css'
import {v4 as uuidv4} from 'uuid';
import { AñadirFollow } from './assets/AñadirFollow';
import { Cabecera } from './assets/Cabecera';
import { ListFollowers } from './assets/ListFollowers';

function App() {
  const [follower,addFollower]=useState([])
  console.log(follower);
  return (
    <>
      <Cabecera fanPage="Cat Does pp" nroSeguidores={follower.length}/>
      <AñadirFollow follower={follower} addFollower={addFollower}/>
      <ListFollowers follower={follower}/>
    </>
  )
}

export default App
