import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading'

function Detail() {

  
    const [char,setChar] = useState(null)

    const {char_id} = useParams()

    const [loading, setLoading] = useState(true)
    
   
    useEffect(()=>{
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/${char_id}`).then(res => res.data)
        .then(data=> setChar(data)).finally(()=> setLoading(false))
    },[char_id])

  return (
    
    
    <div>

    {loading && <Loading/>}
   
    {char && 
        <div>
        <h1>{char.name}</h1>
        <img src={char.image} alt={char.name} style={{width:"50%"}}/>
        </div>
    }

    {char && 
        <code>{JSON.stringify(char)}</code>
    }

    </div>
  )
}

export default Detail