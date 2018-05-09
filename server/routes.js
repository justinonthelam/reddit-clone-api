import express from 'express';

//controller imports
import basicController from './controllers/basicController';

const routes = express();

routes.get('/', basicController.get)

export default routes;