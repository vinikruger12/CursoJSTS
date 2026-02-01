import { Model, DataTypes, Sequelize } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo nao pode ficar vazio',
            }
          }
        },
        filename: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo nao pode ficar vazio',
            }
          }
        },
        url:{
          type: DataTypes.VIRTUAL,
          get(){
            return appConfig.url + '/images/' +this.getDataValue('filename');
          }
        }
      }, {
        sequelize,
        tableName: 'fotos',
      }
    );
    return this;
  }

  static associate(models){
    this.belongsTo(models.Aluno, {foreignKey: 'aluno_id'});
  }

}
