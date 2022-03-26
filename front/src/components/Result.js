import React from 'react';
import Container from 'react-bootstrap/Container'
const Result = ({random}) => {

    return (
        <Container text-center>
            <h3>EL RESULTADO ES {random == 1? "CARA" : "SELLO"}</h3>
        </Container>
    );
}
 
export default Result;