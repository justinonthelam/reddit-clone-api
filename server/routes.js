import express from 'express';

//controller imports
import controllerBasic from './controllers/controllerBasic';
import controllerUser from './controllers/controllerUser';

const routes = express();

// Basic Routes
routes.get('/', controllerBasic.get)

// User Routes
routes.post('/signup', controllerUser.post);

export default routes;