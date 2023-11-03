import React from 'react'
import image1 from '../images/image-product-1.jpg'
import image2 from '../images/image-product-2.jpg'
import image3 from '../images/image-product-3.jpg'

export default function Productimg() {
  var [image ,setimage]=[image]
  function showimg(){
   const show={}
   setimage(show)
  }
  return (
    <div className='Images'>
        <div className='Displayimage'>
            <img src={image}/>
            <h1>images</h1>
        </div>
        <div>
            <img s onClick={showimg}/>
            <img srcrc={image1} onClick={showimg}/>
            <img src={image3} onClick={showimg}/>

        </div>
    </div>
  )
}
