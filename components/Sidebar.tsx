import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROLES } from '../constants';

const Sidebar: React.FC = () => {
  const activeLinkClass = 'bg-accent-cyan text-command-blue';
  const inactiveLinkClass = 'text-slate-dark hover:bg-navy-dark hover:text-slate-light';

  return (
    <aside className="w-64 bg-navy-light flex-shrink-0 flex flex-col">
      <div className="h-16 flex items-center justify-center px-4 border-b border-navy-dark">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-cyan mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <h1 className="text-2xl font-bold text-slate-light">BorderSentinel</h1>
      </div>
      <nav className="flex-grow px-2 py-4">
        <p className="px-4 py-2 text-xs font-semibold text-slate-dark uppercase tracking-wider">Views</p>
        <ul className="space-y-2">
          {ROLES.map(({ role, path }) => (
            <li key={role}>
              <NavLink
                to={path}
                className={({ isActive }) => 
                  `w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive ? activeLinkClass : inactiveLinkClass}`
                }
              >
                {role}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-navy-dark text-center text-xs text-slate-dark">
        <p>&copy; 2024 BorderSentinel Corp.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
