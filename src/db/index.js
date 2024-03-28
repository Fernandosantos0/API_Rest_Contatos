import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Contact from '../models/Contact';

/* Conexão com o banco */
const conexao = new Sequelize(databaseConfig);

const models = [ Contact ];

models.forEach(model => model.init(conexao));
