const HomeModel = require('../models/homeModel')

HomeModel.create({
    titulo:"outro",
    descricao: "sapo"
})
  .then(dados => console.log(dados))
  .catch(e => console.log(e));

exports.paginaInicial = (req, res, next) =>{
    res.render('index');
}

exports.trataPost = (req, res) =>{
    res.send(req.body);
};