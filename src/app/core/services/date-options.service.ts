import { Injectable } from '@angular/core';

@Injectable()
export class DateOptionsService {

  static getFirstDayOfWeek(): Date {
    const date = new Date();
    const currentWeekDay = date.getDay();
    const lessDays = currentWeekDay === 0 ? 6 : currentWeekDay - 1;
    return new Date(new Date(date).setDate(date.getDate() - lessDays));
  }

  static getFirstDayOfMonth(): Date {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }
}
