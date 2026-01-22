module.exports = (req, res, next) =>{
    console.log("Passei no middleware global");
    next();
}