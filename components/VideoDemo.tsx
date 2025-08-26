'use client';

import { useState } from 'react';
import { trackConversion } from '@/lib/analytics';

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    trackConversion('video_demo_played');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Ecoverve in Action
          </h2>
          <p className="text-xl text-gray-600">
            Watch how our platform transforms businesses in just 2 minutes
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            {!isPlaying ? (
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <button
                    onClick={handlePlayVideo}
                    className="group relative"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                      <div className="w-0 h-0 border-l-8 border-l-primary-600 border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                    </div>
                    <div className="absolute inset-0 bg-primary-600 rounded-full opacity-20 animate-ping"></div>
                  </button>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                  ⏱️ 2:30 Demo
                </div>
                
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  🔴 LIVE
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-xl">Demo Video Playing...</p>
                  <p className="text-sm text-gray-300 mt-2">
                    (Connect your actual demo video here)
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900">Quick Setup</h3>
              <p className="text-gray-600 text-sm">Get started in under 5 minutes</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold text-gray-900">Real-time Analytics</h3>
              <p className="text-gray-600 text-sm">See results immediately</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-semibold text-gray-900">Instant Results</h3>
              <p className="text-gray-600 text-sm">300% growth in 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}