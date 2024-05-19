import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import {  getQuotesAsync, selectQuotes, selectQuotesStatus } from '../../redux/quotesSlice'

function QuoteDetail() {


    const {quote_id} = useParams() 

    const dispatch = useDispatch()

    const quotes = useSelector(selectQuotes)
    const status = useSelector(selectQuotesStatus)


    useEffect(()=> {
        if(status ==="idle") {
            dispatch(getQuotesAsync())
        }
        
    }, [dispatch,status])


    if(!quotes) return
 
    const quote = quotes.find((item) => item.id === Number(quote_id))

  


    // const quote = quotes.find(item => item.id === quote_id)
    
    
    // console.log("quote: ",quote)


    if(!quote) return <Navigate to="/quotes" />

  return (
    
    <div>
    <h1>id: {quote_id}</h1>
    <div><code>{JSON.stringify(quote,null,2)}</code></div>
    
    </div>
  )
}

export default QuoteDetail