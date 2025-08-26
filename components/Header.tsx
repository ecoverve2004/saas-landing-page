'use client';

import { useState } from 'react';
import { trackConversion } from '@/lib/analytics';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCTAClick = () => {
    trackConversion('header_cta');
    window.location.href = '#hero';
  };

  const handleSignIn = () => {
    alert('Sign In functionality - Connect to your authentication system');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-600">SaaSPro</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Reviews</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={handleSignIn} className="text-gray-600 hover:text-gray-900">Sign In</button>
            <button onClick={handleCTAClick} className="btn-primary">
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-600 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-600 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600">Features</a>
              <a href="#pricing" className="text-gray-600">Pricing</a>
              <a href="#testimonials" className="text-gray-600">Reviews</a>
              <button onClick={handleSignIn} className="text-gray-600 mb-2">Sign In</button>
              <button onClick={handleCTAClick} className="btn-primary text-center">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}