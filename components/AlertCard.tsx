import React from 'react';
import { Alert, AlertLevel } from '../types';

interface AlertCardProps {
  alert: Alert;
  isSelected: boolean;
  onClick: () => void;
}

const AlertCard: React.FC<AlertCardProps> = ({ alert, isSelected, onClick }) => {
  const levelColorMap = {
    [AlertLevel.CRITICAL]: 'border-alert-red',
    [AlertLevel.WARNING]: 'border-alert-yellow',
    [AlertLevel.INFO]: 'border-slate-dark',
  };

  const levelTextMap = {
    [AlertLevel.CRITICAL]: 'text-alert-red',
    [AlertLevel.WARNING]: 'text-alert-yellow',
    [AlertLevel.INFO]: 'text-slate-light',
  };

  const selectedClass = isSelected ? 'bg-navy-dark ring-2 ring-accent-cyan' : 'bg-navy-light';

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div 
      className={`p-4 rounded-lg shadow-md border-l-4 ${levelColorMap[alert.level]} hover:bg-navy-dark cursor-pointer transition-all duration-200 ${selectedClass}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
      aria-label={`Select alert: ${alert.title}, Level: ${alert.level}, Location: ${alert.location}`}
    >
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-slate-light">{alert.title}</h4>
        <span className={`text-xs font-bold uppercase ${levelTextMap[alert.level]}`}>{alert.level}</span>
      </div>
      <div className="text-sm text-slate-dark mt-2">
        <p>{alert.location}</p>
        <p>{alert.timestamp}</p>
      </div>
    </div>
  );
};

export default AlertCard;