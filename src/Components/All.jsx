import React from 'react'
import Card from './Card'

function All({data}) {
  return (
    <>
   <div className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {
  data.map((e,i)=>{
    return <Card data={e} key={i}/>
  })
}  
        </div>
        </div>
        </div>
        </>
  )
}

export default All