'use client';

import { useState, useEffect } from 'react';
import { trackConversion } from '@/lib/analytics';

export default function PopupModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Show popup after 30 seconds (only in browser)
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      trackConversion('popup_signup');
      alert('Thank you! Check your email for exclusive offers.');
      setEmail('');
      setIsVisible(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative animate-slide-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>
        
        <div className="text-center mb-6">
          <div className="text-4xl mb-4">🎁</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Wait! Don't Miss Out
          </h3>
          <p className="text-gray-600">
            Get 50% OFF your first month + exclusive growth tips
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email for instant access"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200"
          >
            Claim 50% Discount Now
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            ✓ No spam, unsubscribe anytime ✓ Exclusive offers only
          </p>
        </div>
      </div>
    </div>
  );
}