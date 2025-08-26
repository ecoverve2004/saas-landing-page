'use client';

import { useState } from 'react';
import { trackConversion } from '@/lib/analytics';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      trackConversion('live_chat_message');
      alert('Message sent! Our team will respond shortly.');
      setMessage('');
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="bg-white rounded-lg shadow-2xl w-80 mb-4 border">
            <div className="bg-primary-600 text-white p-4 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Chat with us</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <div className="bg-gray-100 p-3 rounded-lg mb-2">
                  <p className="text-sm">Hi! How can we help you today?</p>
                </div>
              </div>
              <form onSubmit={handleSendMessage}>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
                <button 
                  type="submit"
                  className="w-full mt-2 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
        >
          💬
        </button>
      </div>
    </>
  );
}