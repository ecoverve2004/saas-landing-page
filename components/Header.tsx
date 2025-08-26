'use client';

import { useState } from 'react';
import Link from 'next/link';
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
            <Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="/reviews" className="text-gray-600 hover:text-gray-900">Reviews</Link>
            <a href="#faq" className="text-gray-600 hover:text-gray-900" onClick={(e) => {e.preventDefault(); document.getElementById('faq')?.scrollIntoView({behavior: 'smooth'});}}>FAQ</a>
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
              <Link href="/features" className="text-gray-600 text-left" onClick={() => setIsMenuOpen(false)}>Features</Link>
              <Link href="/pricing" className="text-gray-600 text-left" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
              <Link href="/reviews" className="text-gray-600 text-left" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
              <button onClick={() => {document.getElementById('faq')?.scrollIntoView({behavior: 'smooth'}); setIsMenuOpen(false);}} className="text-gray-600 text-left">FAQ</button>
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