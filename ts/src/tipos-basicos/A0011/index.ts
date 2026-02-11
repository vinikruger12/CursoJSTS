function add(a: number | string, b:number | string):number | string | null{
  if(typeof a === typeof b) return a + b;
  return null;
}

console.log(add("sapo", "ola"));
