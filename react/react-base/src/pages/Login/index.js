import React from "react";

import { Title } from './styled'
import { Container } from "../../styles/GlobalStyles";
import { useDispatch } from "react-redux";

import axios from "../../services/axios";
import { func } from "prop-types";
import * as exampleActions from '../../store/modules/example/actions';


export default function Login() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        async function getData(){
            const response = await axios.get('/alunos');
            const { data } = response;
            console.log(data);
        }

        getData()
    }, []);

    function handleClick(e){
        e.preventDefault();

        dispatch(exampleActions.ClicaBotao());
    }

    return(

    <Container>
        <Title isRed={true}>
            Login
            <small>Fala</small>
        
        </Title>
            <button type="button" onClick={handleClick}>Enviar</button>
        <p>Lorem ipsum dolor sit amet.</p>
    </Container>
    )
}