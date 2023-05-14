import React from 'react'


export default function Crad(props) {
  return (
    <div className="card" style={{width:"18rem"}}>
    <img src={props.imgUrl} className="card-img-top" alt="..."/>
    <div className="card-body text-centre">
      <h5 className="card-title">{props.TiTle}</h5>
      <p className="card-text">{props.projectIn}</p>
      <a href="./" className="btn btn-warning btnsc">View Code</a>
    </div>
  </div>
  )
}
