const produto = {nome:"Roupa", preco: 12};

const outroObj = {...produto,
    marca:"Nike",
}; 

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto));
console.log(Object.entries(produto));