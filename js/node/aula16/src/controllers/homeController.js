exports.paginaInicial = (req, res, next) =>{
    req.session.usuario = {nome: "Vinicius", logado:true};
    res.render('index');
}

exports.trataPost = (req, res) =>{
    res.send(req.body);
};