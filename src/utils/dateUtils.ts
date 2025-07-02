// src/utils/dateUtils.ts
// Переконайтеся, що імпорти саме такі:
import { eachWeekOfInterval } from 'date-fns/eachWeekOfInterval'; // Імпорт окремих функцій
import format from 'date-fns/format';
import { startOfWeek } from 'date-fns/startOfWeek';
import { addDays } from 'date-fns/addDays'; // Додаємо, якщо використовується (для endDate)

import { enGB } from 'date-fns/locale'; // Правильний імпорт локалі

// Removed unused formattedEndDate declaration

import { cycleStartDate, scheduleCycles } from '../data/scheduleRules';
import type { WeekSchedule } from '../types';

export const getScheduleForDateRange = (startDate: Date, endDate: Date): WeekSchedule[] => {
  const weeks = eachWeekOfInterval(
    { start: startDate, end: endDate },
    { weekStartsOn: 1 } // Тиждень починається з понеділка (1 - понеділок, 0 - неділя)
  );

  return weeks.map((weekStart: Date) => { // Явно вказуємо тип для weekStart
    // Гарантуємо, що це початок тижня
    const currentWeekStart = startOfWeek(weekStart, { weekStartsOn: 1 });
    const cycleReferenceWeekStart = startOfWeek(cycleStartDate, { weekStartsOn: 1 });

    const diffInMilliseconds = currentWeekStart.getTime() - cycleReferenceWeekStart.getTime();
    const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    const diffInWeeks = Math.floor(diffInMilliseconds / millisecondsPerWeek);

    const cycleIndex = (diffInWeeks % scheduleCycles.length + scheduleCycles.length) % scheduleCycles.length;
    const schedule = scheduleCycles[cycleIndex];

    const formattedStartDate = format(currentWeekStart, 'dd.MM.yyyy', enGB);
    const formattedEndDate = format(
      // Використовуємо addDays з date-fns, щоб отримати кінець тижня (неділя)
      addDays(currentWeekStart, 6),
      'dd.MM.yyyy'
    );

    return {
      week: `${formattedStartDate} - ${formattedEndDate}`,
      serving: schedule.serving.name,
      onDutyTemple: schedule.onDutyTemple.name,
      onDutyCity: schedule.onDutyCity.name,
    };
  });
};