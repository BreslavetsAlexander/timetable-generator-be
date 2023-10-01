import { Router } from 'express';
import { usersRouter } from './users';
import { rowsRouter } from './rows';
import { TimetableGroupController, SheetController } from '../controllers';

const router = Router();

router.use('/users', usersRouter);
router.use('/rows', rowsRouter);

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
router.post('/sheets/:id/generate/html', SheetController.generateHtmlFile);
router.get('/sheets/:id/html', SheetController.getHtmlFile);
router.delete('/sheets/:id/html', SheetController.deleteHtmlFile);
router.post('/sheets/:id/generate/pdf', SheetController.generatePdfFile);
router.get('/sheets/:id/pdf', SheetController.getPdfFile);
router.delete('/sheets/:id/pdf', SheetController.deletePdfFile);

export { router };
