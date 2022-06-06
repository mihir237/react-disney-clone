import {React,useEffect} from 'react'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'

function Home() {

  //this is test
  useEffect(()=>{
    // db.collection("movies").onSnapshot((snapshot)=>{
    //   let tempMovies  = snapshot.docs.map((doc)=>{
    //     return{id:doc.id,...doc.data()}
    //   })
    //   console.log(tempMovies)
    // })
  },[])

  return (
    <div className='min-h-[calc(100vh-70px)] bg-[url("/images/home-background.png")] bg-no-repeat bg-cover px-[clac(3.5vw +5px)]'>
      <ImgSlider />
      <Viewers/>
      <Movies />
    </div>
  )
}

export default Home