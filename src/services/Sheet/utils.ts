import { resolve } from 'path';
import { ISheet } from '../../definitions';
import { STATIC_FOLDER } from '../../constants';

export const getHtmlFilePath = (id: ISheet['id']): string => {
  const fileName = `sheet-${id}.html`;

  return resolve('./', STATIC_FOLDER, fileName);
};
