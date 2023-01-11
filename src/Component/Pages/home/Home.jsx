import React from 'react'
import Feature from '../../Features/Feature'
import List from '../../List/List'
import NavBar from '../../Navbar/NavBar'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <Feature type='movie'/>
      <List/>
      <List/>
      <List/>
      <List/>
      
    </div>
  )
}

export default Home