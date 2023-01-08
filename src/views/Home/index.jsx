import React from 'react'
import style from './Home.module.css'
import StatusBar from 'views/components/StatusBar'
import List from 'views/components/ListView'


function Home() {
  return (
    <div className={style.home}>
      <StatusBar/>
      <List/>
    </div>
  )
}

export default Home