import { Response, Request, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { UserService } from '../../services';
import { IWithId } from '../../definitions';
import { IWithUserId } from '../../definitions/controllers';
import { ENV_VARIABLES } from '../../constants';

export const authMiddleware = async (
  req: Request<{}, {}, IWithUserId, {}, {}>,
  res: Response,
  next: NextFunction,
) => {
  const token = req.header('authorization');

  if (!token) {
    return res.status(403).json({
      message: 'Please, authenticate in the app',
    });
  }

  try {
    const decoded = verify(token, ENV_VARIABLES.JWT_SECRET) as IWithId;
    const user = await UserService.getById(decoded.id);

    if (user) {
      req.body.userId = user.id;
      next();

      return;
    }
  } catch (_) {
    return res.status(403).json({
      message: 'Something went wrong. Try reauthenticate',
    });
  }
};
