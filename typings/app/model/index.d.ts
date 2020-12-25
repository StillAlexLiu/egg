// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAlex from '../../../app/model/Alex';
import ExportAlexTs from '../../../app/model/AlexTs';
import ExportUser from '../../../app/model/User';

declare module 'egg' {
  interface IModel {
    Alex: ReturnType<typeof ExportAlex>;
    AlexTs: ReturnType<typeof ExportAlexTs>;
    User: ReturnType<typeof ExportUser>;
  }
}
