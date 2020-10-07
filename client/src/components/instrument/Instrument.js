import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Instrument = (props) => {
  const id = props.match.params.id;
  const [ quotes, setQuotes ] = useState([]);
  const [ instrument, setInstrument ] = useState([]) 

  useEffect(()=> {
    //get instrument
    //get all quotes from instrument
    axios.get(`/api/instruments/${id}`)
      .then(res => setInstrument(res.data))
      .catch(console.log)

    axios.get(`/api/instruments/${id}/quotes`)
      .then(res => setQuotes(res.data))
      .catch(console.log)
  }, [])

  console.log("quotes", quotes)
  return (
    <Wrapper>
      <strong>
        {instrument.name}
      </strong>
      {quotes.map(quote => (
        <>
          <li>
          "{quote.body}"
          --{quote.author}
          </li>
          <br />
        </>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 2rem;
`

export default Instrument