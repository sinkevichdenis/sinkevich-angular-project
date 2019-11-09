import { Injectable } from '@angular/core';

@Injectable()
export class DateOptionsService {

  static getFirstDayOfWeek(date: Date): Date {
    const currentWeekDay = date.getDay();
    const lessDays = currentWeekDay === 0 ? 6 : currentWeekDay - 1;
    return new Date(new Date(date).setDate(date.getDate() - lessDays));
  }

  static getFirstDayOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  static getStartOfDate(date: Date): number {
    return  new Date(date).setHours(0, 0, 0, 0);
  }
}
