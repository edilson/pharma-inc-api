import { Router } from 'express';

import usersRoutes from '@modules/users/routes/users.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response
    .status(200)
    .json({ message: 'REST Back-end Challenge 20201209 Running' });
});

routes.use('/users', usersRoutes);

export default routes;
