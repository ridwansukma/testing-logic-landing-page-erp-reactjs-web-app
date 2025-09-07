import Button from '../components/Button';
import Section from '../components/Section';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import heroImage1 from '../assets/images/hero1.svg';
import heroImage2 from '../assets/images/hero2.svg';

const Hero: React.FC = () => {
  return (
    <Section
      id="hero"
      background="gradient"
      className="h-screen flex flex-col justify-center items-center pt-32 pb-20"
    >
      <div className="hidden md:block absolute bottom-[-200px] right-[-100px] rotate-[30deg] opacity-10">
        <img
          src={heroImage1}
          alt="HERO ICON 1"
          className="w-[700px] h-[700px]"
        />
      </div>
      <div className="absolute top-[-100px] left-[-100px] rotate-[30deg] opacity-10">
        <img
          src={heroImage2}
          alt="HERO ICON 2"
          className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent leading-tight">
          {`My ERP`}
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {`Transform Your Business`}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          {`Transform your existing business with a better digital experience with us. We'll support all your needs for a faster and more effective company.`}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="flex flex-col justify-center items-center"
          >
            <a href="#pricing">
              <div className="flex flex-row justify-center items-center">
                Get Started Free <ArrowRight className="w-5 h-5 ml-1" />
              </div>
              <p className="text-xs italic">
                ✨ No credit card required • 14-day free trial
              </p>
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
};
export default Hero;
