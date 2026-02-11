function multiplica(...args: Array<number>): number{
  let x = 1;
  for(let i = 0;i < args.length;i++) x *= args[i];
  return x;
}

function concatena(...args: string[]):string{
  let x = '';
  for(let i = 0;i < args.length;i++) x += args[i];
  return x;
}

function maiusculas(...args:Array<string>):string[]{
  return args.map((valor) => valor.toUpperCase());
}

console.log(multiplica(1,2,3,4,5,6));
console.log(concatena("v","i","n","i"));
console.log(maiusculas("v","i","n","i"));
