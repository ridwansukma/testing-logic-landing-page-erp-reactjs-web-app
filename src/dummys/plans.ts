import { PricingPlan } from '../types/plans';

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$9',
    period: '/month',
    features: [
      'Record incoming goods',
      'Record outgoing goods',
      'Record profit',
    ],
  },
  {
    name: 'Business',
    price: '$39',
    period: '/month',
    features: [
      'Record incoming and outgoing goods',
      ' Record profit',
      'Analyze sales results using a chart',
      '24/7 support',
    ],
    popular: true,
  },
  {
    name: 'Entrepreneur',
    price: '$79',
    period: '/month',
    features: [
      'Record incoming and outgoing goods',
      ' Record profit',
      'Analyze sales results using a chart',
      '24/7 support',
      'Export data to Excel',
      'AI income prediction'
    ],
  },
];
