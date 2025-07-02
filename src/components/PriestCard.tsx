// src/components/PriestCard.tsx
import React from 'react';
import type { PriestCardProps } from '../types'; // Використовуємо 'import type'

const PriestCard: React.FC<PriestCardProps> = ({ title, priestName }) => {
  return (
    <div className="priest-card">
      <h3 className="priest-card-title">{title}:</h3>
      <p className="priest-card-name">{priestName}</p>
    </div>
  );
};

export default PriestCard;