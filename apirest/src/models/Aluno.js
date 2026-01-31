import { Model, DataTypes } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome deve ter entre 3 e 255 caracteres',
            }
          }
        },
        sobrenome: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome deve ter entre 3 e 255 caracteres',
            }
          }
        },
        email: {
          type: DataTypes.STRING,
          defaultValue: '',
          unique: {
            msg: "Email ja existe",
          },
          validate: {
            isEmail: {
              msg: 'Email Invalido',
            }
          }
        },
        idade:{
          type: DataTypes.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Campo nome deve ser um numero inteiro',
            }
          }
        },
        peso: {
          type: DataTypes.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Campo nome deve ser um numero',
            }
          }
        },
        altura: {
          type: DataTypes.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Campo nome deve ser um numero',
            }
          }
        },
      },
      {
        sequelize,
        tableName: 'alunos',
      }
    );
    return this;
  }
}
