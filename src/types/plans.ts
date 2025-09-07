import { Dispatch, SetStateAction } from 'react';

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface PricingProps {
  setOpenModalLogin: Dispatch<SetStateAction<boolean>>;
}
