import { Router } from 'express';
import { SheetController } from '../../controllers';

const sheetsRouter = Router();

sheetsRouter.post('/', SheetController.create);
sheetsRouter.get('/', SheetController.getAll);
sheetsRouter.get('/:id', SheetController.getById);
sheetsRouter.put('/:id', SheetController.updateById);
sheetsRouter.delete('/:id', SheetController.deleteById);
sheetsRouter.post('/:id/generate/html', SheetController.generateHtmlFile);
sheetsRouter.get('/:id/html', SheetController.getHtmlFile);
sheetsRouter.delete('/:id/html', SheetController.deleteHtmlFile);
sheetsRouter.post('/:id/generate/pdf', SheetController.generatePdfFile);
sheetsRouter.get('/:id/pdf', SheetController.getPdfFile);
sheetsRouter.delete('/:id/pdf', SheetController.deletePdfFile);

export { sheetsRouter };
