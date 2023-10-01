import { Router } from 'express';
import { UserController } from '../../controllers';

const usersRouter = Router();

usersRouter.post('/', UserController.create);
usersRouter.get('/', UserController.getAll);
usersRouter.get('/:id', UserController.getById);
usersRouter.put('/:id', UserController.updateById);
usersRouter.delete('/:id', UserController.deleteById);

export { usersRouter };
