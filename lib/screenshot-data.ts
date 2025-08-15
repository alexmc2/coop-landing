// Treasury Screenshots - Light theme
import BudgetsScreenshotLight from '@/public/images-app/treasury/budgets-light.png';
import Budgets2ScreenshotLight from '@/public/images-app/treasury/budgets2-light.png';
import BankScreenshotLight from '@/public/images-app/treasury/bank-light.png';
import Bank2ScreenshotLight from '@/public/images-app/treasury/bank2-light.png';
import Bank3ScreenshotLight from '@/public/images-app/treasury/bank3-light.png';
import ExpenseScreenshotLight from '@/public/images-app/treasury/expense-light.png';

// Treasury Screenshots - Dark theme
import BudgetsScreenshotDark from '@/public/images-app/treasury/budgets-dark.png';
import Budgets2ScreenshotDark from '@/public/images-app/treasury/budgets2-dark.png';
import BankScreenshotDark from '@/public/images-app/treasury/bank-dark.png';
import Bank2ScreenshotDark from '@/public/images-app/treasury/bank2-dark.png';
import Bank3ScreenshotDark from '@/public/images-app/treasury/bank3-dark.png';
import ExpenseScreenshotDark from '@/public/images-app/treasury/expense-dark.png';

// Secretary Screenshots - Light theme
import SecretaryScreenshotLight from '@/public/images-app/secretary/secretary-light.png';
import AttendanceScreenshotLight from '@/public/images-app/secretary/attendance-light.png';
import CommsScreenshotLight from '@/public/images-app/secretary/comms-light.png';
import DocsScreenshotLight from '@/public/images-app/secretary/docs-light.png';
import MeetingScreenshotLight from '@/public/images-app/secretary/meeting-light.png';
import MinutesScreenshotLight from '@/public/images-app/secretary/minutes-light.png';

// Secretary Screenshots - Dark theme
import SecretaryScreenshotDark from '@/public/images-app/secretary/secretary-dark.png';
import AttendanceScreenshotDark from '@/public/images-app/secretary/attendance-dark.png';
import CommsScreenshotDark from '@/public/images-app/secretary/comms-dark.png';
import DocsScreenshotDark from '@/public/images-app/secretary/docs-dark.png';
import MeetingScreenshotDark from '@/public/images-app/secretary/meeting-dark.png';
import MinutesScreenshotDark from '@/public/images-app/secretary/minutes-dark.png';

// Functions to get theme-appropriate images
export const getTreasuryImages = (isDark: boolean) => [
  {
    src: isDark ? BudgetsScreenshotLight.src : BudgetsScreenshotDark.src,
    alt: 'Budget Overview',
    caption: 'Visual budget tracking and monitoring',
  },
  {
    src: isDark ? BankScreenshotLight.src : BankScreenshotDark.src,
    alt: 'Bank Reconciliation',
    caption: 'Automated bank transaction matching',
  },
  {
    src: isDark ? Bank2ScreenshotLight.src : Bank2ScreenshotDark.src,
    alt: 'Transaction Management',
    caption: 'Detailed transaction records and categorization',
  },
  {
    src: isDark ? Bank3ScreenshotLight.src : Bank3ScreenshotDark.src,
    alt: 'Financial Reports',
    caption: 'Comprehensive financial reporting',
  },
  {
    src: isDark ? ExpenseScreenshotLight.src : ExpenseScreenshotDark.src,
    alt: 'Expense Management',
    caption: 'Track and manage expenses efficiently',
  },
  {
    src: isDark ? Budgets2ScreenshotLight.src : Budgets2ScreenshotDark.src,
    alt: 'Budget Management',
    caption: 'Track and manage expenses efficiently',
  },
];

// Legacy export for backward compatibility
export const treasuryImages = getTreasuryImages(true);

export const getSecretaryImages = (isDark: boolean) => [
  {
    src: isDark ? SecretaryScreenshotLight.src : SecretaryScreenshotDark.src,
    alt: 'Secretary Dashboard',
    caption: 'Overview of secretary tools and governance',
  },
  {
    src: isDark ? MeetingScreenshotLight.src : MeetingScreenshotDark.src,
    alt: 'Meeting Management',
    caption: 'Schedule and organize co-op meetings',
  },
  {
    src: isDark ? AttendanceScreenshotLight.src : AttendanceScreenshotDark.src,
    alt: 'Attendance Tracking',
    caption: 'Track member attendance at meetings',
  },
  {
    src: isDark ? MinutesScreenshotLight.src : MinutesScreenshotDark.src,
    alt: 'Meeting Minutes',
    caption: 'Record and manage meeting minutes',
  },
  {
    src: isDark ? DocsScreenshotLight.src : DocsScreenshotDark.src,
    alt: 'Document Management',
    caption: 'Central repository for co-op documents',
  },
  {
    src: isDark ? CommsScreenshotLight.src : CommsScreenshotDark.src,
    alt: 'Communications Log',
    caption: 'Track all co-op communications',
  },
];

// Legacy export for backward compatibility
export const secretaryImages = getSecretaryImages(true);

// Placeholder for future sections
export const maintenanceImages = [
  // Add maintenance screenshots here
];

export const communityImages = [
  // Add community/garden screenshots here
];
