import { CpaDefault } from './cpaDefault.interface';

export interface CpaPayment  extends CpaDefault {
  dirId: number | string | null;
  data: number;
  currency: string;
  value: number;
  text?: string;
}
