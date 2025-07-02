// src/utils/dateUtils.ts
// Переконайтеся, що імпорти саме такі:
import { eachWeekOfInterval } from 'date-fns/eachWeekOfInterval';
import { format } from 'date-fns/format'; // <-- Важливо: з 'date-fns/format'
import { startOfWeek } from 'date-fns/startOfWeek';
import { addDays } from 'date-fns/addDays'; // Якщо використовується для дат, як в кінці тижня

import { enGB } from 'date-fns/locale'; // Правильний імпорт локалі

import { cycleStartDate, scheduleCycles } from '../data/scheduleRules';
import type { WeekSchedule } from '../types';

export const getScheduleForDateRange = (startDate: Date, endDate: Date): WeekSchedule[] => {
  const weeks = eachWeekOfInterval(
    { start: startDate, end: endDate },
    { weekStartsOn: 1 }
  );

  return weeks.map((weekStart: Date) => {
    const currentWeekStart = startOfWeek(weekStart, { weekStartsOn: 1 });
    const cycleReferenceWeekStart = startOfWeek(cycleStartDate, { weekStartsOn: 1 });

    const diffInMilliseconds = currentWeekStart.getTime() - cycleReferenceWeekStart.getTime();
    const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    const diffInWeeks = Math.floor(diffInMilliseconds / millisecondsPerWeek);

    const cycleIndex = (diffInWeeks % scheduleCycles.length + scheduleCycles.length) % scheduleCycles.length;
    const schedule = scheduleCycles[cycleIndex];

    // ПЕРЕВІРТЕ ЦІ РЯДКИ:
    const formattedStartDate = format(currentWeekStart, 'dd.MM.yyyy', { locale: enGB });
    const formattedEndDate = format(
      addDays(currentWeekStart, 6), // Перший аргумент: об'єкт Date
      'dd.MM.yyyy',                 // Другий аргумент: формат-рядок
      { locale: enGB }              // Третій аргумент: об'єкт опцій (з локаллю всередині)
    );

    return {
      week: `${formattedStartDate} - ${formattedEndDate}`,
      serving: schedule.serving.name,
      onDutyTemple: schedule.onDutyTemple.name,
      onDutyCity: schedule.onDutyCity.name,
    };
  });
};