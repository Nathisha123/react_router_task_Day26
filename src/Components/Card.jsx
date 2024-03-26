import React from 'react'
function Card({data}) 
{
  return  <div className="card-container">
  <div className="card" style={{width: '18rem'}}>
   <img src={data.image}  alt="Card image cap"/> */
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    
  </div>
</div>
</div>
}

export default Card