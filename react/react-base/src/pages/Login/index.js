import React from "react";

import { Title } from './styled'
import { Container } from "../../styles/GlobalStyles";

export default function Login() {
    return(

    <Container>
        <Title isRed={true}>
            Login
            <small>Fala</small>
        
        </Title>
            <button type="button">Enviar</button>
        <p>Lorem ipsum dolor sit amet.</p>
    </Container>
    )
}