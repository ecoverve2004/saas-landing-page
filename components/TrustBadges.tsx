export default function TrustBadges() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm uppercase tracking-wide">Trusted by industry leaders</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-400">🏢 Microsoft</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-400">🚀 Startup Inc</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-400">⚡ TechCorp</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-400">🌟 InnovateLab</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-400">🔥 GrowthCo</div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 mt-8">
          <div className="flex items-center text-green-600">
            <span className="text-2xl mr-2">🔒</span>
            <span className="text-sm font-semibold">SSL Secured</span>
          </div>
          <div className="flex items-center text-blue-600">
            <span className="text-2xl mr-2">✅</span>
            <span className="text-sm font-semibold">GDPR Compliant</span>
          </div>
          <div className="flex items-center text-purple-600">
            <span className="text-2xl mr-2">🛡️</span>
            <span className="text-sm font-semibold">SOC 2 Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}