'use client';

import { useState } from 'react';
import { trackConversion } from '@/lib/analytics';

export default function CTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      trackConversion('final_cta_signup');
      alert('Thank you! We\'ll be in touch soon.');
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-primary-100 mb-8">
          Join thousands of successful businesses. Start your free trial today.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 text-lg rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
            required
          />
          <button 
            type="submit"
            className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Start Free Trial
          </button>
        </form>
        
        <div className="mt-6 text-primary-100">
          <p>No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}