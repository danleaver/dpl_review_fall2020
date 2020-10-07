import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Instruments = () => {
  const [ instruments, setInstruments ] = useState([]);

  useEffect(() => {
    axios.get('/api/instruments')
      .then(res => {
        console.log("response: ", res.data)
        setInstruments(res.data)
      })
      .catch(console.log)
  }, [])

  return (
    <Flex>
      {instruments.map(instrument => (
        <Link key={instrument.id} to={`/instruments/${instrument.id}`}> 
          <FlexColumn>
            <StyledImage image={instrument.url} />
            <div>
              {instrument.name}
            </div>
          </FlexColumn>
        </Link>
      ))}
    </Flex>
  )

}

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10rem;
`
const StyledImage = styled.div`
  background-image: url(${props => props.image});
  background-position: center;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;

`
export default Instruments