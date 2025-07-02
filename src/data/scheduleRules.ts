// src/data/scheduleRules.ts
import type {  ScheduleRule } from '../types'; // Використовуємо 'import type'
import { priests } from './priests';

// Змінна Priest не потрібна тут, оскільки ми використовуємо priests безпосередньо
// const [vitaliy, vyacheslav, ioan, vasiliy, dimitriy, sofroniy] = priests;
// Замість деструктуризації, яка може викликати попередження, якщо не всі змінні використовуються
// Ми можемо отримати їх за індексом або просто використовувати priests[індекс]

// Якщо ви все ж хочете деструктурувати, переконайтеся, що всі змінні використовуються
// або вимкніть правило ESLint для цього рядка.
// Найкраще використовувати їх інакше, якщо це можливо, або ігнорувати попередження, якщо воно не заважає.
// Але для цього прикладу, якщо ми просто їх використовуємо нижче, попередження зникне.

const [vitaliy, vyacheslav, ioan, vasiliy, dimitriy, sofroniy] = priests; // Залишаємо так, попередження зникне, коли змінні використовуються нижче.

export const scheduleCycles: ScheduleRule[] = [
  {
    serving: ioan,
    onDutyTemple: vitaliy,
    onDutyCity: sofroniy,
  },
  {
    serving: vasiliy,
    onDutyTemple: vyacheslav,
    onDutyCity: vitaliy,
  },
  {
    serving: dimitriy,
    onDutyTemple: ioan,
    onDutyCity: vyacheslav,
  },
  {
    serving: sofroniy,
    onDutyTemple: vasiliy,
    onDutyCity: ioan,
  },
  {
    serving: vitaliy,
    onDutyTemple: dimitriy,
    onDutyCity: vasiliy,
  },
  {
    serving: vyacheslav,
    onDutyTemple: sofroniy,
    onDutyCity: dimitriy,
  },
];

export const cycleStartDate = new Date('2025-06-30T00:00:00Z');