"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class UserController{
  async store(req, res){
    try{
      const novoUser = await _Users2.default.create(req.body);

      const {id, nome, email} = novoUser;

      return res.json({id, nome, email});
    }
    catch(e){
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async index(req,res){
    try{
      const users = await _Users2.default.findAll({attributes: ["id", "nome", "email"]});

      return res.json(users);
    }
    catch(e){
      return res.json(null);
    }
  }

  async show(req,res){
    try{
      const user = await _Users2.default.findByPk(req.params.id);
      const {id, nome, email} = user;
      return res.json({id, nome, email});
    }
    catch(e){
      return res.json(null);
    }
  }

  async update(req,res){
    try{



      const user = await _Users2.default.findByPk(req.userId);

      if(!user){
        return res.status(400).json({
          errors: ['Usuario nao existe'],
        });
      }

      const novosDados = await user.update(req.body);
      const {id, nome, email} = novosDados;

      return res.json({id, nome, email});
    }
    catch(e){
      return res.json(null);
    }
  }


  async delete(req,res){
    try{

    const user = await _Users2.default.findByPk(req.userId);

      if(!user){
        return res.status(400).json({
          errors: ['Usuario nao existe'],
        });
      }


      await user.destroy();
      return res.json(null);
    }
    catch(e){
      return res.json(null);
    }
  }


}

exports. default = new UserController();
