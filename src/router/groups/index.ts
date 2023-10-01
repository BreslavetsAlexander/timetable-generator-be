import { Router } from 'express';
import { TimetableGroupController } from '../../controllers';

const groupsRouter = Router();

groupsRouter.post('/', TimetableGroupController.create);
groupsRouter.get('/', TimetableGroupController.getAll);
groupsRouter.get('/:id', TimetableGroupController.getById);
groupsRouter.put('/:id', TimetableGroupController.updateById);
groupsRouter.delete('/:id', TimetableGroupController.deleteById);

export { groupsRouter };
