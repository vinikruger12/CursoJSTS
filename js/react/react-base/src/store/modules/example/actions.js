import * as types from '../types'

export function ClicaBotaoRequest(){
    return{
        type: types.BOTAO_CLICADO_REQUEST,
    };
}

export function ClicaBotaoSuccess(){
    return{
        type: types.BOTAO_CLICADO_SUCCESS,
    };
}

export function ClicaBotaoFailure(){
    return{
        type: types.BOTAO_CLICADO_FAILURE,
    };
}