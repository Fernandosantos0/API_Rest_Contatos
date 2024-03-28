import { Router } from 'express';
const routes = new Router();

import ContactController from './src/controllers/ContactController'

/* Rotas */
routes.get('/', ContactController.home);
routes.get('/contacts', ContactController.home);
routes.get('/contacts/:id', ContactController.getContact);
routes.post('/contacts/register', ContactController.register);
routes.put('/contacts/update/:id', ContactController.update);
routes.delete('/contacts/delete/:id', ContactController.delete)

export default routes;
