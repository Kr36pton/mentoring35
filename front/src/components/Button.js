import React, { useState } from 'react'
import Coin from './Coin'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Result from './Result'
import Sound from '../assets/sound/mario-coin.mp3'

const From = () => {// component stateless

  const [random, setRandom] = useState(2);

  const throwCoin = () => {
    console.log("Se lanza la moneda");
    new Audio(Sound).play();
    setRandom(Math.floor(Math.random() * (1.99999 - 0)));
    console.log(`aleatorio ${random}`);

  }
    
  return (
    <Container >
      <Stack gap={2} className="col-md-5 mx-auto">
            <Coin random={random}></Coin>
            <Button variant="primary" onClick={throwCoin}>Lanzar moneda</Button>
            <Result random={random} />
          </Stack>
    </Container>
  );
}

export default From;
