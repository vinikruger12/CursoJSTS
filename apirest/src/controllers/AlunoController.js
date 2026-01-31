import Aluno from '../models/Aluno'

class AlunoController{
  async index(req, res){
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async show(req, res){
    try{
      const { id } = req.params;

      if(!id) return res.status(400).json({
        errors: ['Missing ID'],
      });

      const aluno = await Aluno.findByPk(id);

      if(!aluno) return res.status(400).json({
        errors: ['Missing "Aluno"'],
      });

      res.json(aluno);

    }
    catch (e) {
        return res.status(400).json({
          errors: e.errors ? e.errors.map(err => err.message) : [e.message],
        });
    }
  }

  async update(req, res){
    try{

      const { id } = req.params;

      if(!id) return res.status(400).json({
        errors: ['Missing ID'],
      });

      const aluno = await Aluno.findByPk(id);

      if(!aluno) return res.status(400).json({
        errors: ['Missing "Aluno"'],
      });


      const novoAluno = await aluno.update(req.body);
      return res.json(novoAluno);


    }
    catch (e) {
        return res.status(400).json({
          errors: e.errors ? e.errors.map(err => err.message) : [e.message],
        });
    }
  }

  async delete(req, res){
    try{
      const { id } = req.params;

      if(!id) return res.status(400).json({
        errors: ['Missing ID'],
      });

      const aluno = await Aluno.findByPk(id);

      if(!aluno) return res.status(400).json({
        errors: ['Missing "Aluno"'],
      });

      await aluno.destroy();
      res.json('"Aluno" has been excluded');

    }
    catch (e) {
        return res.status(400).json({
          errors: e.errors ? e.errors.map(err => err.message) : [e.message],
        });
    }
  }

  async store(req, res){
    try{
      const aluno = await Aluno.create(req.body);
      res.json(aluno);

    }
    catch (e) {
        return res.status(400).json({
          errors: e.errors ? e.errors.map(err => err.message) : [e.message],
        });
    }

  }
}

export default new AlunoController();
