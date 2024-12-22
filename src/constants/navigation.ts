import { 
  Users, 
  FileText, 
  Stethoscope,
  Settings,
  UserCog,
  TestTubes,
  Clock,
  Timer,
  Pill,
  Tablets
} from 'lucide-react';

export const NAVIGATION_ITEMS = [
  { 
    id: 'patients',
    icon: Users,
    text: 'Patients',
    href: '#patients' 
  },
  { 
    id: 'prescriptions',
    icon: FileText,
    text: 'Prescriptions',
    href: '#prescriptions' 
  },
  {
    id: 'doctors',
    icon: UserCog,
    text: 'Doctors',
    href: '#doctors'
  },
  {
    id: 'diagnoses',
    icon: Stethoscope,
    text: 'Diagnoses',
    href: '#diagnoses'
  },
  {
    id: 'diagnostic-tests',
    icon: TestTubes,
    text: 'Diagnostic Tests',
    href: '#diagnostic-tests'
  },
  {
    id: 'drugs',
    icon: Tablets,
    text: 'Drugs',
    href: '#drugs'
  },
  {
    id: 'dose-duration',
    icon: Clock,
    text: 'Dose Duration',
    href: '#dose-duration'
  },
  {
    id: 'dose-interval',
    icon: Timer,
    text: 'Dose Interval',
    href: '#dose-interval'
  },
  {
    id: 'dosage',
    icon: Pill,
    text: 'Dosage',
    href: '#dosage'
  },
  { 
    id: 'settings',
    icon: Settings,
    text: 'Settings',
    href: '#settings' 
  },
] as const;
