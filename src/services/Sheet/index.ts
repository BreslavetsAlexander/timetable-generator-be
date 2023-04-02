import { Sheet } from '../../mongodb';
import { CreateSheet } from '../../definitions/Sheet';
import { ISheet } from '../../definitions';

class _SheetService {
  async create(payload: CreateSheet) {
    const sheet = await Sheet.create(payload);

    return sheet;
  }

  async getAll() {
    const sheets = await Sheet.find();

    return sheets;
  }

  async getById(id: ISheet['id']) {
    const sheet = await Sheet.findById(id);

    return sheet;
  }

  async updateById(id: ISheet['id'], data: CreateSheet) {
    await Sheet.updateOne({ _id: id }, data);

    return this.getById(id);
  }

  async deleteById(id: ISheet['id']) {
    await Sheet.deleteOne({ _id: id });
  }
}

export const SheetService = new _SheetService();
