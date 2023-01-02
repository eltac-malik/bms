import React from 'react'
import style from './Home.module.css'
import PieChart from 'views/components/Charts/PieChart'
import List from 'views/components/ListView'


function Home() {
  return (
    <div className={style.home}>
      <PieChart/>
      <List/>
    </div>
  )
}

export default Home