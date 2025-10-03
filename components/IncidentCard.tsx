import React from 'react';
import { Alert, AlertLevel } from '../types';

interface IncidentCardProps {
  alert: Alert;
  isSelected: boolean;
  onSelect: (alertId: string, isSelected: boolean) => void;
  onViewOnTimeline: (alert: Alert) => void;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ alert, isSelected, onSelect, onViewOnTimeline }) => {
  const levelColorMap = {
    [AlertLevel.CRITICAL]: 'border-alert-red',
    [AlertLevel.WARNING]: 'border-alert-yellow',
    [AlertLevel.INFO]: 'border-slate-dark',
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(alert.id, e.target.checked);
  };
  
  return (
    <div className={`p-3 rounded-lg shadow-md border-l-4 ${levelColorMap[alert.level]} bg-navy-dark transition-all duration-200`}>
      <div className="flex items-start justify-between">
        <div className="flex-grow">
            <h4 className="font-bold text-slate-light">{alert.title}</h4>
            <p className="text-xs text-slate-dark">{alert.timestamp}</p>
        </div>
        <input 
            type="checkbox"
            checked={isSelected}
            onChange={handleCheckboxChange}
            className="ml-4 h-5 w-5 rounded bg-command-blue border-slate-dark text-accent-cyan focus:ring-accent-cyan cursor-pointer"
            aria-label={`Select incident for analysis: ${alert.title}`}
        />
      </div>
      <button 
        onClick={() => onViewOnTimeline(alert)} 
        className="mt-2 text-xs text-accent-cyan hover:underline"
        aria-label={`View ${alert.title} on timeline`}
      >
        View on Timeline
      </button>
    </div>
  );
};

export default IncidentCard;