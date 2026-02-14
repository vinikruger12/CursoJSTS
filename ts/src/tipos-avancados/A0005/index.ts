type Adder = {
  (x:number) : number;
  (x: number, y:number):number;
  (...arg: number[]):number;
}

const adder: Adder = (x: number, y:number, ...args:number[]) =>{
  if(args.length > 0){
    let k = x + y;
    for(let i = 0;i < args.length;i++){
      k += args[i];
    }
    return k;
  }

  if(typeof y !== 'undefined') return x + y;

  return x;
}


console.log(adder(10));
console.log(adder(10,1));
console.log(adder(10,1,2,3));


