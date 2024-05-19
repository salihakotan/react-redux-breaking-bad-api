import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuotesAsync, selectQuoteError, selectQuotes, selectQuotesStatus } from '../../redux/quotesSlice'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import { Link } from 'react-router-dom'
import "../Home/styles.css"
import Item from './item'

function Quotes() {



    const quotes = useSelector(selectQuotes)
    const status = useSelector(selectQuotesStatus)
    const error = useSelector(selectQuoteError)

    
    const dispatch = useDispatch()

    useEffect(()=> {
        if(status ==="idle") {
            dispatch(getQuotesAsync())
        }
       
    },[dispatch,status])



    if(error) {
        <Error errorMessage={error}/>
    }

  return (
  

    <div style={{width:"70%"}}>

<h1>React - Redux - Router</h1>

        <h2>Quotes</h2>

        {status ==="loading" && <Loading/>}

        {quotes && status ==="succeeded" && (
            quotes.map((item,key) => { 

               return <Item key={key} item={item}/>
            }
             ))
        }

        {quotes && status ==="succeeded" && (
            <div style={{textAlign:"center", padding:20, fontSize:25}}>{quotes.length} quotes</div>
        )}
    </div>
  )
}

export default Quotes