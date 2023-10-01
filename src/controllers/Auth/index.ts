import { Response, Request } from 'express';
import { AuthService } from '../../services';
import { LoginPayload, RegisterPayload } from '../../definitions/Auth';

class _AuthController {
  async register(req: Request<{}, {}, RegisterPayload, {}, {}>, res: Response) {
    const data = await AuthService.register(req.body);

    return res.json(data);
  }

  async login(req: Request<{}, {}, LoginPayload, {}, {}>, res: Response) {
    const data = await AuthService.login(req.body);

    return res.json(data);
  }
}

export const AuthController = new _AuthController();
