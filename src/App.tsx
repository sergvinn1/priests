// src/App.tsx
import React, { useState, useEffect } from 'react';
import { addDays } from 'date-fns';
import { getScheduleForDateRange } from './utils/dateUtils';

import Header from './components/Header';
import DateRangePicker from './components/DateRangePicker';
import ScheduleDisplay from './components/ScheduleDisplay';

import type { WeekSchedule } from './types'; // Використовуємо 'import type'

const App: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(addDays(new Date(), 28));
  const [schedule, setSchedule] = useState<WeekSchedule[]>([]);

  useEffect(() => {
    if (startDate && endDate) {
      setSchedule(getScheduleForDateRange(startDate, endDate));
    } else {
      setSchedule([]);
    }
  }, [startDate, endDate]);

  return (
    <div className="container">
      <Header />
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
           {schedule.length > 0 ? (
        <ScheduleDisplay schedule={schedule} />
      ) : (
        <p className="no-schedule-message">Оберіть діапазон дат, щоб побачити розклад.</p>
      )} {/* <--- Ось цей рядок, видаліть ) */}
    </div>
  );
};

export default App;