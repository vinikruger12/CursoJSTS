import isEmail from "validator/lib/isEmail";


const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const valida:Array<HTMLInputElement> = [username, email, password, password2];

form.addEventListener('submit', function(event: Event){
  event.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFields(valida);
  checkEmail(email);
  checkPasswords(password, password2);
  if(shouldSendForm(this)) console.log("Formulario enviado");
});

function checkForEmptyFields(input:Array<HTMLInputElement>):void{
  for(let i = 0;i < input.length;i++){
    if(!input[i].value){
      showErrorMessage(input[i], "Os campos nao podem ficar vazios");
    }
  }
}

function checkEmail(input:HTMLInputElement):void{
  if(!isEmail(input.value)) showErrorMessage(input, "Email invalido");
}

function checkPasswords(input1:HTMLInputElement, input2:HTMLInputElement): void{
  if(input1.value !== input2.value){
    showErrorMessage(input1, "Senhas devem coincidir")
    showErrorMessage(input2, "Senhas devem coincidir")
  }
}

function hideErrorMessages(form: HTMLFormElement): void{
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(item => item.classList.remove(SHOW_ERROR_MESSAGES));
}



function showErrorMessage(input: HTMLInputElement, msg:string): void{
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form:HTMLFormElement): boolean{
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => (send = false));
  return send;
}

