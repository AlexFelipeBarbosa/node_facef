import { Sequelize } from 'sequelize';
import Env from './environment.config';

export default {
    default: new Sequelize(Env.DB_NAME)
};