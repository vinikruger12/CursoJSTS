class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("Formulario nao enviado");
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(senhasValidas && camposValidos){
            alert("Formulario enviado");
            this.formulario.submit();
        }

    }

    senhasSaoValidas(){
        let valid = true;
        const senha = this.formulario.querySelector('.password');
        const repetir = this.formulario.querySelector('.repeat');

        if(senha.value !== repetir.value){
            valid = false;
            this.criaErro(senha, "Senha e Repetir devem coincidir");
            this.criaErro(repetir, "Senha e Repetir devem coincidir");
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, "Senha deve ter entre 6 e 12 caracteres");
        }

        return valid;
    }

    camposSaoValidos(){
        let valid = true;
        
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campos of this.formulario.querySelectorAll('.validar')){
            const label = campos.previousElementSibling.innerText;

            if(!campos.value){
                this.criaErro(campos, "Campo " + label + " nao pode estar em branco");
            }

            if(campos.classList.contains('cpf')){
                if(!this.validaCPF(campos)) valid = false;
            }

            if(campos.classList.contains('user')){
                if(!this.validaUser(campos)) valid = false;
            }

        }
        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        if(!cpf.valida()){
            this.criaErro(campo, 'CPF invalido');
            return false;
        }
        return true;
    }

    validaUser(campo){
        const user = campo.value;
        let flag = true;
        if(user.length < 3 || user.length > 12){
            this.criaErro(campo, "O nome do usuario deve estar entre 3 e 12 caracteres");
            flag = false;
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, "O nome do usuario deve ter apenas numeros ou letras");
            flag = false;
        }

        return flag;
    }


    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
        
    }


}

const valida = new ValidaFormulario();