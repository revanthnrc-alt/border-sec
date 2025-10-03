import { UserRole, AlertLevel, SystemStatus, AlertStatus } from './types';
import type { RoleConfig, Alert, SystemComponentHealth } from './types';

export const COMMAND_PATH = '/command';
export const FIELD_AGENT_PATH = '/agent';
export const ANALYST_PATH = '/analyst';

export const ROLES: RoleConfig[] = [
  { role: UserRole.COMMAND, path: COMMAND_PATH },
  { role: UserRole.FIELD_AGENT, path: FIELD_AGENT_PATH },
  { role: UserRole.ANALYST, path: ANALYST_PATH },
];

export const DUMMY_ALERTS: Alert[] = [
  {
    id: 'a1',
    level: AlertLevel.CRITICAL,
    title: 'Unidentified Vehicle Detected',
    timestamp: '2024-07-31 22:15:03 UTC',
    location: 'Sector 4, Grid 8B',
    coordinates: { lat: 31.776, lng: -106.511 },
    status: AlertStatus.PENDING,
    dispatchLog: [
        { id: 'msg1', sender: 'Command', text: 'Agent 7, investigate unidentified vehicle at Sector 4. High priority.', timestamp: '2024-07-31 22:15:10 UTC' }
    ],
    evidence: [],
  },
  {
    id: 'a2',
    level: AlertLevel.WARNING,
    title: 'Perimeter Sensor Anomaly',
    timestamp: '2024-07-31 22:12:45 UTC',
    location: 'Gate 3',
    coordinates: { lat: 31.774, lng: -106.505 },
    status: AlertStatus.ACKNOWLEDGED,
    dispatchLog: [
        { id: 'msg2', sender: 'Command', text: 'Check perimeter sensor at Gate 3.', timestamp: '2024-07-31 22:12:55 UTC' },
        { id: 'msg3', sender: 'Agent', text: 'Acknowledged. On my way.', timestamp: '2024-07-31 22:13:20 UTC' },
    ],
    evidence: [],
  },
  {
    id: 'a3',
    level: AlertLevel.WARNING,
    title: 'Low Drone Battery',
    timestamp: '2024-07-31 22:10:11 UTC',
    location: 'Drone Unit AX-7',
    coordinates: { lat: 31.78, lng: -106.52 },
    status: AlertStatus.RESOLVED,
    dispatchLog: [],
    evidence: [],
  },
  {
    id: 'a4',
    level: AlertLevel.INFO,
    title: 'Scheduled Maintenance',
    timestamp: '2024-07-31 22:05:00 UTC',
    location: 'Command Center',
    coordinates: { lat: 31.77, lng: -106.49 },
    status: AlertStatus.RESOLVED,
    dispatchLog: [],
    evidence: [],
  },
];

export const SYSTEM_HEALTH_STATUS: SystemComponentHealth[] = [
    { name: 'AI Core', status: SystemStatus.OPERATIONAL },
    { name: 'Sensors', status: SystemStatus.DEGRADED },
    { name: 'Network', status: SystemStatus.OPERATIONAL },
    { name: 'Drones', status: SystemStatus.OPERATIONAL },
];