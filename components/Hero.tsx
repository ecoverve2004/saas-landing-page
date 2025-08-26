'use client';

import { useState, useEffect } from 'react';
import { getVariant, trackConversion } from '@/lib/analytics';

export default function Hero() {
  const [variant, setVariant] = useState<'A' | 'B'>('A');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setVariant(getVariant('hero_cta'));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      trackConversion('email_signup');
      // Handle email submission
      alert('Thank you for signing up!');
      setEmail('');
    }
  };

  const ctaText = variant === 'A' ? 'Start Free Trial' : 'Get Started Now';
  const headline = variant === 'A' 
    ? 'Boost Your Business Growth by 300%' 
    : 'Transform Your Business in 30 Days';

  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join 10,000+ businesses using our SaaS platform to streamline operations, 
            increase productivity, and drive unprecedented growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="px-6 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                required
              />
              <button type="submit" className="btn-primary text-lg">
                {ctaText}
              </button>
            </form>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <span>✓ 14-day free trial</span>
            <span>✓ No credit card required</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}