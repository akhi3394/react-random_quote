import  { useEffect, useState } from 'react'
import './random.css'


const Random = () => {
    const[quote,setQuote]=useState('')
    const[author,setAuthor]=useState('')


const fetchQuote= async ()=>{
    // let response=await fetch("https://zenquotes.io/api/today")
    const response = await fetch('https://api.quotable.io/random');
    let data=await response.json()
    console.log(data);
    setQuote(data.content)
    setAuthor(data.author)
}
useEffect(()=>{
    fetchQuote()
},[])

const handleNewQuote=()=>{
    fetchQuote()
}



  return (
    <div className='random-container'>
   
        <h1 className='quote'>{quote}</h1>
        <p className='author'>-{author}</p>
        <button onClick={handleNewQuote} className='new-quote-btn'>Generate Random</button>
    
    </div>
  )
}

export default Random
