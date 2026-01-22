exports.paginaInicial = (req, res, next) =>{
    res.render('index', {
        titulo: "Este sera o titulo da pagina",
        numeros: [0,1,2,3,4,5,6]
    });
}

exports.trataPost = (req, res) =>{
    res.send(req.body);
};