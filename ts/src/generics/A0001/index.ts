type FilterCB<U> = (
  value: U,
  index?:number,
  array?: U[],
) => boolean ;

function meuFilter<T>(array: T[], callbackfn: FilterCB<T>):T[]{
  const newArray = [];

  for(let i = 0;i < array.length;i++){
    if(callbackfn(array[i])){
      newArray.push(array[i]);
    }
  }


  return newArray;
}

const array = [1,2,3,4,5,6,7,8,9,10];

const arrayFiltrado = array.filter((value) => value < 5);
const naFiltrado = meuFilter(array, (value) => value < 5);

console.log(arrayFiltrado);
console.log(naFiltrado);
