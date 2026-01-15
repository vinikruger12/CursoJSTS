(function(...args){
    const sobrenome = "Kruger";
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    console.log(criaNome("Vinicius"));
    console.log(args);
})(18, 70, 1.83);