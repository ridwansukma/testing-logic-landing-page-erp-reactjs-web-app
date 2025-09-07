import { pricingPlans } from '../dummys/plans';
import Section from '../components/Section';
import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { CheckCheck } from 'lucide-react';
import { PricingProps } from '@/types/plans';

const PricingPlans: React.FC<PricingProps> = ({ setOpenModalLogin }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (planName: string): void => {
    setSelectedPlan(planName);
  };

  return (
    <Section id="pricing" className="py-20">
      <div className="flex flex-col justify-center items-center text-center mb-16">
        <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Pricing for My ERP
        </div>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your team. Upgrade or downgrade at any
          time.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            hover
            className={`p-8 relative ${plan.popular ? 'border-2 border-purple-600 scale-105' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <Button
                variant={plan?.popular ? 'primary' : 'outline'}
                className="w-full"
                onClick={() => {
                    setOpenModalLogin(true)
                    setTimeout(() => {
                        handlePlanSelect(plan?.name || '')
                    }, 500);
                }}
              >
                {selectedPlan === plan?.name ? 'Selected!' : 'Choose Plan'}
              </Button>
            </div>
            <ul className="space-y-3">
              {plan && plan?.features && plan?.features?.length > 0 && plan?.features?.map((feature, featureIndex: number) => (
                <li
                  key={featureIndex}
                  className="flex flex-row justify-start items-start gap-2 text-gray-700"
                >
                  <CheckCheck className="w-3 h-3 mt-[6px] text-purple-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};
export default PricingPlans;
