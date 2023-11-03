import React, { useEffect, useState } from 'react'

export default function Fetchdata() {

    let[firstmethod,setfirstmethod]=useState([])

    let secondmethod=[]

    function fetchapi(){
        fetch('https://api.disneyapi.dev/characters')
        .then (response=>{
            return response.json();
        }).then(data=>{

            console.log(data.data)
            setfirstmethod(data.data)  



            secondmethod=data
            console.log("this secondmethod",secondmethod)
            
        })
    }
    useEffect(()=>{
        fetchapi()
        console.log("data is fetched")
    },[])
    
  return (
    <div className='d-flex flex-wrap justify-content-around'>
        
        <div>
        <h1>first method</h1>
            {
            firstmethod.map((dischar)=>{
                return (
                    <div>
                       <img src={dischar.imageUrl} />
                    </div>
                )
            })

            }
            
        </div>


        {/* this part of is the executing */}
        <div>
            <h1>second method</h1>
            {
                 secondmethod.map((data)=>{
                    return (
                        <div>
                         <h2>{data.data.name}</h2>
                        </div>
                    )
    
                })
            }
        </div>
    </div>
  )
}
