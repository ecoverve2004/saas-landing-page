declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    hj: (command: string, ...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS_ID;
export const HOTJAR_ID = process.env.HOTJAR_ID;

// Google Analytics
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID!, {
      page_path: url,
    });
  }
};

export const event = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// A/B Testing
export const getVariant = (testName: string): 'A' | 'B' => {
  if (typeof window === 'undefined') return 'A';
  
  const stored = localStorage.getItem(`ab_test_${testName}`);
  if (stored) return stored as 'A' | 'B';
  
  const variant = Math.random() < 0.5 ? 'A' : 'B';
  localStorage.setItem(`ab_test_${testName}`, variant);
  
  // Track A/B test assignment
  event('ab_test_assigned', testName, variant);
  
  return variant;
};

// Conversion tracking
export const trackConversion = (type: string, value?: number) => {
  event('conversion', type, undefined, value);
  
  // Hotjar event
  if (typeof window !== 'undefined' && window.hj) {
    window.hj('event', `conversion_${type}`);
  }
};