import express from 'express';

//controller imports
import controllerBasic from './controllers/controllerBasic';
import controllerUser from './controllers/controllerUser';
import controllerPost from './controllers/controllerPost';

const routes = express();

// Basic Routes
routes.get('/', controllerBasic.get)

// User Routes
routes.post('/signup', controllerUser.post);

// Post Routes
routes.post('/post', controllerPost.post);
routes.get('/posts', controllerPost.getAll);

export default routes;