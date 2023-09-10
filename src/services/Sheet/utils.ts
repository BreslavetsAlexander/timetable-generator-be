import { existsSync } from 'fs';
import { resolve } from 'path';
import { ISheet } from '../../definitions';
import { STATIC_FOLDER } from '../../constants';

const getFilePath = (id: ISheet['id'], extension: string): string => {
  const fileName = `sheet-${id}.${extension}`;

  return resolve('./', STATIC_FOLDER, fileName);
};

export const getHtmlFilePath = (id: ISheet['id']): string => getFilePath(id, 'html');

export const getPdfFilePath = (id: ISheet['id']): string => getFilePath(id, 'pdf');

export const isExistsHtmlFile = (id: ISheet['id']): boolean => existsSync(getHtmlFilePath(id));

export const isExistsPdfFile = (id: ISheet['id']): boolean => existsSync(getPdfFilePath(id));
