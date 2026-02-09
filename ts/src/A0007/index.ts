let x;
if(typeof x === 'undefined') x = 20;
console.log(x);

function createPerson(firstName: string, lastName?: string):{
  firstName: string;
  lastName?: string;
} {
  return{
    firstName,
    lastName,
  }
}

function squareof(x:any){
  if(typeof x !== 'number') return null;
  return x * x;
}

console.log(squareof("sapo"));
