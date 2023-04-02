import { Router } from 'express';
import {
  UserController,
  TimetableRowController,
  TimetableGroupController,
  SheetController,
} from '../controllers';

const router = Router();

router.post('/users', UserController.create);
router.get('/users', UserController.getAll);

router.post('/rows', TimetableRowController.create);
router.get('/rows', TimetableRowController.getAll);
router.get('/rows/:id', TimetableRowController.getById);
router.put('/rows/:id', TimetableRowController.updateById);
router.delete('/rows/:id', TimetableRowController.deleteById);

router.post('/groups', TimetableGroupController.create);
router.get('/groups', TimetableGroupController.getAll);
router.get('/groups/:id', TimetableGroupController.getById);
router.put('/groups/:id', TimetableGroupController.updateById);
router.delete('/groups/:id', TimetableGroupController.deleteById);

router.post('/sheets', SheetController.create);
router.get('/sheets', SheetController.getAll);
router.get('/sheets/:id', SheetController.getById);
router.put('/sheets/:id', SheetController.updateById);
router.delete('/sheets/:id', SheetController.deleteById);

export { router };
