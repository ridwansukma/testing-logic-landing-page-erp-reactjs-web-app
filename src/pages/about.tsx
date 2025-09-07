import { features } from '../dummys/features';
import Section from '../components/Section';
import React from 'react';
import Card from '../components/Card';
import { Feature } from '../types/feature';
import aboutImage1 from '../assets/images/about1.svg';

const About: React.FC = () => {
  return (
    <Section id="about" className="py-0 md:py-20 relative">
      <div className="flex flex-col md:flex-row justify-center items-center text-gray-900 w-full my-10">
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10">
          <img
            src={aboutImage1}
            alt="About Image 1"
            className="w-[300px] h-[300px]"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About My ERP
          </div>
          <p className="text-lg mb-5">{`With the increasing digitalization in today's workplace, we are here to help accelerate and improve decision-making accuracy. We are ready to evolve alongside the industry.`}</p>
          <p className="text-lg">{`Therefore, we present My ERP to meet the needs of the industrial community. We are committed to advancing the industry.`}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features &&
          features?.length > 0 &&
          features?.map((feature: Feature, index: number) => (
            <Card key={index} hover className="p-8 text-center">
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {feature?.title || ''}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature?.description || ''}
              </p>
            </Card>
          ))}
      </div>
    </Section>
  );
};
export default About;
