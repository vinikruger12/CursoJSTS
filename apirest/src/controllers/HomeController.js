import Aluno from '../models/Aluno'

class HomeController{
  async index(req, res){
    const novoAluno = await Aluno.create({
      nome: 'Vinicius',
      sobrenome: 'Kruger',
      email: 'viniciusmoreirakruger@gmail.com',
      idade: 18,
      peso: 70,
      altura: 1.83,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
