exports.paginaInicial = (req, res, next) =>{
    res.render('index');
}

exports.trataPost = (req, res) =>{
    res.send(req.body);
};