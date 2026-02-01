"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

exports. default = async(req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization){
    return res.status(401).json({
      errors: ["Login Required"],
    });
  }

  const [, token] = authorization.split(' ');

  try{
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const {id, email} = dados;

    const user = await _Users2.default.findOne({
      where: {
        id,
        email,
      }
    })

    if(!user){
      return res.status(401).json({
        errors: ["Usuario invalido"],
      });
    }

    req.userId = id;
    req.UserEmail = email;
    return next();
  }
  catch(e){
      return res.status(401).json({
        errors: ["Tokin expirado ou invalido"],
      });
  }

};
