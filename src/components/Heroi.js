import React from 'react'
import '../Styles/heroi.css'
import HeroImg from "../assets/heroimg.jpg"

export default function Heroi() {
  return (
    <div className='hero'>
        <img className='heroimg' src={HeroImg} alt="" />
        <div className="mask">
       
       </div>
       <div className='headtext'>
        <h2>Yuvaraj.D</h2>

       </div>
       <div className='head2text'>
        <h5>MERN STACK DEVELOPER</h5>

       </div>
       <div className="disc">
        <p>"Are you looking for a Merk stack developer ? <br/>
         Then you are in the right place get the
         <br/> professional results you are looking for ,
         <br/>looking froward to work with you. "</p>

       </div>
       <div className="btn">
       <button type="button" class="btn-1">About</button>
       </div>
       <div className="btn-22">
        <button className='btn-2'> Projects</button>
       </div>
    </div>
  )
}
