import React from 'react';
import { Alert, AlertLevel } from '../types';

interface AlertDetailPanelProps {
  alert: Alert;
}

const AlertDetailPanel: React.FC<AlertDetailPanelProps> = ({ alert }) => {
  const levelTextMap = {
    [AlertLevel.CRITICAL]: 'text-alert-red',
    [AlertLevel.WARNING]: 'text-alert-yellow',
    [AlertLevel.INFO]: 'text-slate-light',
  };

  return (
    <div className="bg-navy-light rounded-2xl shadow-lg p-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-accent-cyan">Alert Details</h3>
        <span className={`text-sm font-bold uppercase px-2 py-1 rounded ${levelTextMap[alert.level]}`}>{alert.level}</span>
      </div>
      <div className="space-y-3 text-sm">
        <div>
          <p className="font-semibold text-slate-light">Event:</p>
          <p className="text-slate-dark">{alert.title}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-light">Location:</p>
          <p className="text-slate-dark">{alert.location}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-light">Timestamp:</p>
          <p className="text-slate-dark">{alert.timestamp}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-light">Log Integrity:</p>
          <div className="flex items-center space-x-2 bg-navy-dark p-2 rounded-md mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-health-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-health-green font-semibold text-xs">Verified Integrity</span>
          </div>
          <p className="text-slate-dark font-mono text-xs mt-2 break-all">{alert.hash}</p>
        </div>
      </div>
    </div>
  );
};

export default AlertDetailPanel;
