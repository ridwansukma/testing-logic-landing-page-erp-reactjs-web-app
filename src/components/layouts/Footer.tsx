import { JSX } from 'react';

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              My ERP
            </div>
            <p className="text-gray-400 leading-relaxed">
              {`Transform your existing business with a better digital experience with us. We'll support all your needs for a faster and more effective company.`}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{`Company's`}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Join Us</h4>
            <div>
              <input
                type="email"
                placeholder="Your Email..."
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className='mt-5'>
              <h3 className='text-md mb-1'>Jakarta</h3>
              <p className='text-xs text-gray-400'>Jl. Medan Merdeka Tim. 6-9, RT.2/RW.1, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 My ERP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
