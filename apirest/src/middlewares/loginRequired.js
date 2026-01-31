import jwt  from "jsonwebtoken";
import User from "../models/Users";

export default async(req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization){
    return res.status(401).json({
      errors: ["Login Required"],
    });
  }

  const [, token] = authorization.split(' ');

  try{
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const {id, email} = dados;

    const user = await User.findOne({
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
