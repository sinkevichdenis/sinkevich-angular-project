import { CpaDefault } from './cpa-default.interface';

export interface CpaPayment  extends CpaDefault {
  catId: string | null;
  date: number;
  currency: string;
  value: number;
  text?: string;
}
