// src/components/ScheduleDisplay.tsx
import React from 'react';
import PriestCard from './PriestCard';
import type { WeekSchedule, ScheduleDisplayProps } from '../types'; // Використовуємо 'import type'

const ScheduleDisplay: React.FC<ScheduleDisplayProps> = ({ schedule }) => {
  return (
    <div className="schedule-display-container">
      {schedule.map((weekData: WeekSchedule, index: number) => ( // Вказуємо типи для map
        <div key={index} className="week-schedule-card">
          <h2 className="week-title">{weekData.week}</h2>
          <div className="priest-cards-grid">
            <PriestCard title="Служачий" priestName={weekData.serving} />
            <PriestCard title="Черговий по храму" priestName={weekData.onDutyTemple} />
            <PriestCard title="Черговий по місту" priestName={weekData.onDutyCity} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleDisplay;