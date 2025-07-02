// src/types.ts

export interface Priest {
    id: string;
    name: string;
  }
  
  export interface WeekSchedule {
    week: string; // Наприклад: "30.06.2025 - 06.07.2025"
    serving: string; // Ім'я священника
    onDutyTemple: string; // Ім'я священника
    onDutyCity: string; // Ім'я священника
  }
  
  export interface ScheduleRule {
    serving: Priest;
    onDutyTemple: Priest;
    onDutyCity: Priest;
  }
  
  // Пропси для компонентів
  export type HeaderProps = Record<string, never>; // Означає об'єкт без властивостей
  
  export interface DateRangePickerProps {
    startDate: Date | undefined; // DatePicker працює з Date | undefined
    endDate: Date | undefined;
    setStartDate: (date: Date | undefined) => void;
    setEndDate: (date: Date | undefined) => void;
  }
  
  export interface ScheduleDisplayProps {
    schedule: WeekSchedule[];
  }
  
  export interface PriestCardProps {
    title: string;
    priestName: string;
  }