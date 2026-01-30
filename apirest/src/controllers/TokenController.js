import User from '../models/Users'
import jsonWebToken from 'jsonwebtoken'

class TokenController{
  async store(req, res){
    const {email = '', password = ''} = req.body;

    if(!email || !password) return res.status(401).json({
      errors: ["Credenciais invalidas"],
    });

    const user = await User.findOne({ where: {email: email}});

    if(!user) return res.status(401).json({
      errors: ["Usuario nao existe"],
    });

    if(!(await user.passwordIsValid(password))) {
      return res.status(401).json({
      errors: ["Senha Invalida"],
      });
    }

    const {id} = user;
    const token = jsonWebToken.sign({id, email}, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    res.json({ token });
  }
}

export default new TokenController();
