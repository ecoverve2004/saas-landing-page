'use client';

import { trackConversion } from '@/lib/analytics';

export default function Pricing() {
  const handlePlanSelect = (plan: string) => {
    trackConversion('plan_selected', plan === 'pro' ? 99 : 29);
    alert(`${plan.charAt(0).toUpperCase() + plan.slice(1)} plan selected! Redirecting to signup...`);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$29</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Up to 1,000 users
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Basic analytics
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Email support
              </li>
            </ul>
            <button 
              onClick={() => handlePlanSelect('starter')}
              className="btn-secondary w-full"
            >
              Start Free Trial
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-primary-500 rounded-xl p-8 relative bg-primary-50">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$99</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Unlimited users
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Advanced analytics
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Priority support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                API access
              </li>
            </ul>
            <button 
              onClick={() => handlePlanSelect('pro')}
              className="btn-primary w-full"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}