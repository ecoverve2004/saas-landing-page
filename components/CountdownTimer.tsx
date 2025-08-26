'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set countdown to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-center">
          <div className="mb-2 md:mb-0 md:mr-6">
            <span className="text-lg font-semibold">🔥 Limited Time Offer: 50% OFF</span>
          </div>
          
          <div className="flex space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-xs">DAYS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs">HOURS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs">MINS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{timeLeft.seconds}</div>
              <div className="text-xs">SECS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}