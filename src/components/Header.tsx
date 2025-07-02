// src/components/Header.tsx
import React from 'react';
import type { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <h1 className="header-title">Розклад чергувань священників</h1>
      <p className="header-subtitle">Оберіть діапазон дат для перегляду розкладу</p>
    </header>
  );
};

export default Header;