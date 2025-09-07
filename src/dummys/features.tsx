import { Feature } from '../types/feature';
import { Users, Zap, Shield } from 'lucide-react';

export const features: Feature[] = [
  {
    icon: <Zap className="w-8 h-8 text-purple-600" />,
    title: 'Lightning Fast',
    description:
      'Built with modern tech stack for optimal performance and user experience.',
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-600" />,
    title: 'Secure & Reliable',
    description:
      'Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.',
  },
  {
    icon: <Users className="w-8 h-8 text-purple-600" />,
    title: 'Team Collaboration',
    description:
      'Work together seamlessly with real-time collaboration tools and features.',
  },
];
