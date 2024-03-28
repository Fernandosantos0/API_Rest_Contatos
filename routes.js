import { Router } from 'express';
const routes = new Router();

import ContactController from './src/controllers/ContactController'

/* Rotas */
routes.get('/', ContactController.home);

export default routes;
