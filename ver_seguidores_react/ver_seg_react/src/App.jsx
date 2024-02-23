import React,{ useState } from 'react'
import './App.css'
import { Follower } from './assets/Follower'
import {v4 as uuidv4} from 'uuid';
import { AñadirFollow } from './assets/AñadirFollow';
import { Cabecera } from './assets/Cabecera';

function App() {
  return (
    <>
      <Cabecera fanPage="fanPage" nroSeguidores="nroSeguidores"/>
      <AñadirFollow/>
      <Follower>
        Tortita
      </Follower>
    </>
  )
}

export default App
