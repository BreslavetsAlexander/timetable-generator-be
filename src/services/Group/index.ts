import { TimetableGroup } from '../../mongodb';
import { CreateTimetableGroup } from '../../definitions/Group';
import { ITimetableGroup, ISheet } from '../../definitions';

class _TimetableGroupService {
  async create(payload: CreateTimetableGroup) {
    const group = await TimetableGroup.create(payload);

    return group;
  }

  async getAll() {
    const groups = await TimetableGroup.find();

    return groups;
  }

  async getAllBySheetId(sheetId: ISheet['id']) {
    const groups = await TimetableGroup.find({ sheetId });

    return groups;
  }

  async getById(id: ITimetableGroup['id']) {
    const group = await TimetableGroup.findById(id);

    return group;
  }

  async updateById(id: ITimetableGroup['id'], data: CreateTimetableGroup) {
    await TimetableGroup.updateOne({ _id: id }, data);

    return this.getById(id);
  }

  async deleteById(id: ITimetableGroup['id']) {
    await TimetableGroup.deleteOne({ _id: id });
  }

  async deleteAllBySheetId(sheetId: ISheet['id']) {
    await TimetableGroup.deleteMany({ sheetId });
  }
}

export const TimetableGroupService = new _TimetableGroupService();
