import React,{useState} from 'react'
import Navigation from 'views/components/Navigation'

function Home({setLeft,setBottom}) {


  return (
    <>
      <Navigation setLeft={setLeft} setBottom={setBottom}/>
    </>
  )
}

export default Home