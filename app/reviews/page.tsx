import Link from 'next/link';

export default function ReviewsPage() {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      rating: 5,
      content: 'Ecoverve transformed our business operations completely. We saw a 40% increase in productivity within just 2 months. The analytics dashboard gives us insights we never had before.',
      avatar: '👩💼',
      results: '40% productivity increase'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      company: 'GrowthCo',
      rating: 5,
      content: 'The automation features are incredible. We saved 20 hours per week on manual tasks. Our team can now focus on strategic initiatives instead of repetitive work.',
      avatar: '👨💼',
      results: '20 hours saved weekly'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'InnovateLab',
      rating: 5,
      content: 'Best investment we made this year. The platform helped us identify new revenue opportunities worth $500K. The ROI has been phenomenal.',
      avatar: '👩🚀',
      results: '$500K new revenue'
    },
    {
      name: 'David Park',
      role: 'CTO',
      company: 'ScaleTech',
      rating: 5,
      content: 'Integration was seamless. The API documentation is excellent and our developers had everything connected in under a day. Support team is outstanding.',
      avatar: '👨💻',
      results: 'Same-day integration'
    },
    {
      name: 'Lisa Wang',
      role: 'Marketing Director',
      company: 'BrandForce',
      rating: 5,
      content: 'The analytics helped us optimize our campaigns and increase conversion rates by 65%. The real-time reporting is a game-changer.',
      avatar: '👩📊',
      results: '65% conversion increase'
    },
    {
      name: 'James Wilson',
      role: 'VP Operations',
      company: 'EfficiencyCorp',
      rating: 5,
      content: 'Reduced our operational costs by 30% while improving service quality. The automation workflows are incredibly powerful and easy to set up.',
      avatar: '👨⚡',
      results: '30% cost reduction'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
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
            Trusted by Industry Leaders
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying about their success with Ecoverve
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{review.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.role}</div>
                    <div className="text-sm text-primary-600">{review.company}</div>
                  </div>
                </div>
                
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(review.rating)}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{review.content}"</p>
                
                <div className="bg-green-50 text-green-800 px-3 py-2 rounded-lg text-sm font-semibold">
                  📈 {review.results}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Thousands of Successful Businesses</h2>
          <p className="text-xl text-primary-100 mb-8">Start your success story today</p>
          <Link href="/" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}