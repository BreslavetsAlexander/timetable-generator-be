import { Router } from 'express';
import { TimetableRowController } from '../../controllers';

const rowsRouter = Router();

rowsRouter.post('/', TimetableRowController.create);
rowsRouter.get('/', TimetableRowController.getAll);
rowsRouter.get('/:id', TimetableRowController.getById);
rowsRouter.put('/:id', TimetableRowController.updateById);
rowsRouter.delete('/:id', TimetableRowController.deleteById);

export { rowsRouter };
