import Link from 'next/link';

export default function FeaturesPage() {
  const features = [
    {
      icon: '📊',
      title: 'Advanced Analytics Dashboard',
      description: 'Real-time insights with customizable charts, KPI tracking, and automated reports.',
      benefits: ['Real-time data visualization', 'Custom KPI tracking', 'Automated report generation', 'Export to PDF/Excel']
    },
    {
      icon: '⚡',
      title: 'Lightning Fast Performance',
      description: 'Optimized cloud infrastructure delivering sub-second response times.',
      benefits: ['99.9% uptime guarantee', 'Global CDN network', 'Auto-scaling infrastructure', 'Sub-second load times']
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance certifications.',
      benefits: ['256-bit SSL encryption', 'SOC 2 Type II certified', 'GDPR compliant', '2FA authentication']
    },
    {
      icon: '🚀',
      title: 'Easy Integration',
      description: 'Connect with 100+ popular tools through our robust API and pre-built integrations.',
      benefits: ['REST API access', '100+ integrations', 'Webhook support', 'Custom connectors']
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Native mobile apps and responsive web design for access anywhere.',
      benefits: ['iOS & Android apps', 'Responsive design', 'Offline sync', 'Push notifications']
    },
    {
      icon: '🎯',
      title: 'Smart Automation',
      description: 'AI-powered workflows that eliminate repetitive tasks and reduce errors.',
      benefits: ['Workflow automation', 'AI-powered insights', 'Task scheduling', 'Error reduction']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary-600">Ecoverve</Link>
            <Link href="/" className="text-primary-600 hover:text-primary-700">← Back to Home</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Businesses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline operations, boost productivity, and drive growth.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8">Try all features free for 14 days</p>
          <Link href="/" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}