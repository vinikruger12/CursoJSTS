import React from "react";

import { Title } from './styled'
import { Container } from "../../styles/GlobalStyles";

import axios from "../../services/axios";

export default function Login() {

    React.useEffect(() => {
        async function getData(){
            const response = await axios.get('/alunos');
            const { data } = response;
            console.log(data);
        }

        getData();
    }, []);

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