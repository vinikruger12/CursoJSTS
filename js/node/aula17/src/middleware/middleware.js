module.exports = (req, res, next) =>{
    res.locals.umaVariavelLocal = "Este e o valor da variavel local";
    console.log("Passei no middleware global");
    next();
}