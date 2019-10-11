import { CpaDefault } from './cpaDefault.interface';

export interface Payment  extends CpaDefault {
  dirId: number | string | null;
  data: number;
  currency: string;
  value: number;
  name?: string;
}
