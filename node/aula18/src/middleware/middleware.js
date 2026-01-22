function meuMiddleware(req, res, next) {
    res.locals.umaVariavelLocal = "Este e o valor da variavel local";
    console.log("Passei no middleware global");
    next();
}

function checkCsrfError(err, req, res, next) {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404.ejs');
    }
    next(err);
}

function csrfMiddleware(req,res,next){
    res.locals.csrfToken = req.csrfToken();
    next();
};

module.exports = {
    meuMiddleware,
    checkCsrfError,
    csrfMiddleware
};