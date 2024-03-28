import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

/* Importando a conexão com o banco de dados */
import './src/db'

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(bodyParser.json());
    }

    routes() {
        this.app.use(routes);
        this.app.use((req, res, next) => {
            return res.status(400).json({
                errors: ['Esta rota não existe.']
            });
        });
    }
}

export default new App().app;
