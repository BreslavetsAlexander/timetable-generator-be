import { Router } from 'express';
import { authMiddleware } from '../middleware';
import { authRouter } from './auth';
import { usersRouter } from './users';
import { rowsRouter } from './rows';
import { groupsRouter } from './groups';
import { sheetsRouter } from './sheets';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', authMiddleware, usersRouter);
router.use('/rows', authMiddleware, rowsRouter);
router.use('/groups', authMiddleware, groupsRouter);
router.use('/sheets', authMiddleware, sheetsRouter);

export { router };
