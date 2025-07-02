// src/components/DateRangePicker.tsx
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Стилі для DatePicker
import type { DateRangePickerProps } from '../types'; // Використовуємо 'import type'

const DateRangePicker: React.FC<DateRangePickerProps> = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <div className="date-picker-container">
      <div className="date-input-group">
        <label htmlFor="startDate" className="date-label">Початок періоду:</label>
        <DatePicker
          id="startDate"
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date === null ? undefined : date)} // DatePicker повертає null, конвертуємо в undefined
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd.MM.yyyy"
          className="date-input"
        />
      </div>
      <div className="date-input-group">
        <label htmlFor="endDate" className="date-label">Кінець періоду:</label>
        <DatePicker
          id="endDate"
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date === null ? undefined : date)} // DatePicker повертає null, конвертуємо в undefined
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd.MM.yyyy"
          className="date-input"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;