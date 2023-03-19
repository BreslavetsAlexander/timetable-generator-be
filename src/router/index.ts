import { Router } from 'express';
import { UserController, TimetableRowController } from '../controllers';

const router = Router();

router.post('/users', UserController.create);
router.get('/users', UserController.getAll);

router.post('/rows', TimetableRowController.create);
router.get('/rows', TimetableRowController.getAll);
router.get('/rows/:id', TimetableRowController.getById);
router.put('/rows/:id', TimetableRowController.updateById);
router.delete('/rows/:id', TimetableRowController.deleteById);

export { router };
