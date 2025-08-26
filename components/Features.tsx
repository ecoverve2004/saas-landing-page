export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Get deep insights into your business performance with real-time dashboards and reports.'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with our optimized cloud infrastructure.'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance certifications.'
    },
    {
      icon: '🚀',
      title: 'Easy Integration',
      description: 'Connect with 100+ popular tools and platforms with our robust API.'
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Access your dashboard anywhere with our responsive design and mobile apps.'
    },
    {
      icon: '🎯',
      title: 'Smart Automation',
      description: 'Automate repetitive tasks and workflows to save time and reduce errors.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help your business grow faster and more efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}