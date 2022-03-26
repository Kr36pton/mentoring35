import React from 'react';
import imgCara from '../assets/img/cara.jpg'
import imgSello from '../assets/img/sello.jpg'
import Container from 'react-bootstrap/Container'
import Figure from 'react-bootstrap/Figure'
const Coin = ({random}) => {

    return (
        <Container>
            <Figure>
                <Figure.Image
                    width={390}
                    height={180}
                    alt="171x180"
                    src={random == 1? imgCara : imgSello}
                />
            </Figure>
        </Container>
    );
}
 
export default Coin;
