import React from 'react'
import './index.css'
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <header className="Header" style={{backgroundColor:`#2D2D2D`}}>
        <img className="Header_Logo" src={Logo} alt='Logo DNC'></img>
        <h1 className="Header_title">Lista de tarefas</h1>
    </header>
  )
}

export default Header
