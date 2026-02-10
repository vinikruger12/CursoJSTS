function funcao(this: Date, argumento1:string, age:number):void{
  console.log(this);
  console.log(argumento1);
}

funcao.call(new Date(), 'VIni', 18);
funcao.apply(new Date(), ['VIni', 18]);
