type MapStringsCallback = (item: string) => string;

function mapStrings(array: Array<string>, callbackfn: MapStringsCallback): Array<string>{
  const newArray: string[] = [];

  for(let i = 0;i < array.length;i++){
    newArray[i] = callbackfn(array[i]);
  }

  return newArray;
}

const abc = ['A', 'B', 'C'];
const abcMapped = mapStrings(abc, item => item.toLowerCase());

console.log(abcMapped);
