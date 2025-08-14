// Treasury Screenshots
import BudgetsScreenshot from '@/public/images-app/treasury/budgets-light.png';
import Budgets2Screenshot from '@/public/images-app/treasury/budgets2-light.png';
import BankScreenshot from '@/public/images-app/treasury/bank-light.png';
import Bank2Screenshot from '@/public/images-app/treasury/bank2-light.png';
import Bank3Screenshot from '@/public/images-app/treasury/bank3-light.png';
import ExpenseScreenshot from '@/public/images-app/treasury/expense-light.png';

// Secretary Screenshots
import SecretaryScreenshot from '@/public/images-app/secretary/secretary-light.png';
import AttendanceScreenshot from '@/public/images-app/secretary/attendance-light.png';
import CommsScreenshot from '@/public/images-app/secretary/comms-light.png';
import DocsScreenshot from '@/public/images-app/secretary/docs-light.png';
import MeetingScreenshot from '@/public/images-app/secretary/meeting-light.png';
import MinutesScreenshot from '@/public/images-app/secretary/minutes-light.png';

// Export screenshot data arrays
export const treasuryImages = [
  {
    src: BudgetsScreenshot.src,
    alt: 'Budget Overview',
    caption: 'Visual budget tracking and monitoring',
  },
  {
    src: BankScreenshot.src,
    alt: 'Bank Reconciliation',
    caption: 'Automated bank transaction matching',
  },
  {
    src: Bank2Screenshot.src,
    alt: 'Transaction Management',
    caption: 'Detailed transaction records and categorization',
  },
  {
    src: Bank3Screenshot.src,
    alt: 'Financial Reports',
    caption: 'Comprehensive financial reporting',
  },
  {
    src: ExpenseScreenshot.src,
    alt: 'Expense Management',
    caption: 'Track and manage expenses efficiently',
  },
  {
    src: Budgets2Screenshot.src,
    alt: 'Budget Management',
    caption: 'Track and manage expenses efficiently',
  },
];

export const secretaryImages = [
  {
    src: SecretaryScreenshot.src,
    alt: 'Secretary Dashboard',
    caption: 'Overview of secretary tools and governance',
  },
  {
    src: MeetingScreenshot.src,
    alt: 'Meeting Management',
    caption: 'Schedule and organize co-op meetings',
  },
  {
    src: AttendanceScreenshot.src,
    alt: 'Attendance Tracking',
    caption: 'Track member attendance at meetings',
  },
  {
    src: MinutesScreenshot.src,
    alt: 'Meeting Minutes',
    caption: 'Record and manage meeting minutes',
  },
  {
    src: DocsScreenshot.src,
    alt: 'Document Management',
    caption: 'Central repository for co-op documents',
  },
  {
    src: CommsScreenshot.src,
    alt: 'Communications Log',
    caption: 'Track all co-op communications',
  },
];

// Placeholder for future sections
export const maintenanceImages = [
  // Add maintenance screenshots here
];

export const communityImages = [
  // Add community/garden screenshots here
];
