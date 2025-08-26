export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">SaaSPro</div>
            <p className="text-gray-400">
              Empowering businesses to grow faster with intelligent automation and analytics.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><button onClick={() => alert('API Documentation - Coming Soon!')} className="hover:text-white text-left">API</button></li>
              <li><button onClick={() => alert('Integrations Page - Coming Soon!')} className="hover:text-white text-left">Integrations</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => alert('About Us - Ecoverve TechSolution: Empowering businesses since 2024')} className="hover:text-white text-left">About</button></li>
              <li><button onClick={() => alert('Blog - Coming Soon! Stay tuned for growth tips')} className="hover:text-white text-left">Blog</button></li>
              <li><button onClick={() => alert('Careers - Join our team! Email: careers@ecoverve.com')} className="hover:text-white text-left">Careers</button></li>
              <li><button onClick={() => alert('Contact Us - Email: support@ecoverve.com | Phone: +1-800-ECOVERVE')} className="hover:text-white text-left">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => alert('Help Center - 24/7 Support Available! Visit: help.ecoverve.com')} className="hover:text-white text-left">Help Center</button></li>
              <li><button onClick={() => alert('Privacy Policy - We protect your data with enterprise-grade security')} className="hover:text-white text-left">Privacy Policy</button></li>
              <li><button onClick={() => alert('Terms of Service - Fair and transparent terms for all users')} className="hover:text-white text-left">Terms of Service</button></li>
              <li><button onClick={() => alert('System Status - All systems operational ✅')} className="hover:text-white text-left">Status</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ecoverve TechSolution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}