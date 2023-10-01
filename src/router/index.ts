import { Router } from 'express';
import { usersRouter } from './users';
import { rowsRouter } from './rows';
import { groupsRouter } from './groups';
import { sheetsRouter } from './sheets';

const router = Router();

router.use('/users', usersRouter);
router.use('/rows', rowsRouter);
router.use('/groups', groupsRouter);
router.use('/sheets', sheetsRouter);

export { router };
