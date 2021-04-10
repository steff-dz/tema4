import React, { useState, useEffect } from 'react'

const Quote = () => {
  //Here we are using useEffect to run a function that gets random quotes from an API. It then stores the data it fetched into
  //quote state and since the function can also run by click, the useEffect will re-render the screen
  let [quote, setQuotes] = useState({})

  useEffect(() => {
    quoteHandler()
  }, [])

  const quoteHandler = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data)
      })
  }

  return (
    <div className="quoteContainer">
      <p id="text" onClick={quoteHandler}>
        <i className="fas fa-quote-left" />
        {quote.content}
        <i className="fas fa-quote-right" />
      </p>
      <p id="author">- {quote.author}</p>
    </div>
  )
}

export default Quote
