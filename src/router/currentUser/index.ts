import { Router } from 'express';
import { CurrentUserController } from '../../controllers';

const currentUserRouter = Router();

currentUserRouter.get('/', CurrentUserController.get);
currentUserRouter.get('/sheets', CurrentUserController.getSheets);
currentUserRouter.put('/', CurrentUserController.update);
currentUserRouter.delete('/', CurrentUserController.delete);

export { currentUserRouter };
