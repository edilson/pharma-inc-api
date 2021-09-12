import { Router } from 'express';

import UserController from '../controllers/UserController';

const userRouter = Router();

const userController = new UserController();

userRouter
  .route('/:userId')
  .get(userController.findById)
  .delete(userController.delete)
  .put(userController.update);

userRouter.get('/', userController.findAll);

export default userRouter;
