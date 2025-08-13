import { FaInstagram, FaDribbble, FaTwitter, FaYoutube, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left - Copyright & Social */}
        <div>
          <p className="text-sm mb-2">Copyright © 2025 ABUJAPI Jabar</p>
          <p className="text-sm mb-6">All rights reserved</p>
          <div className="flex space-x-3">
            {[
              { icon: <FaInstagram />, label: "Instagram" },
              { icon: <FaDribbble />, label: "Dribbble" },
              { icon: <FaTwitter />, label: "Twitter" },
              { icon: <FaYoutube />, label: "YouTube" },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                aria-label={item.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-500 transition-colors">About us</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">Contact us</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">Testimonials</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-500 transition-colors">Help center</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">Terms of service</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">Legal</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">Privacy policy</a></li>
          </ul>
        </div>

       <div>
          <h3 className="font-semibold mb-4">Stay up to date</h3>
          <form className="flex items-center bg-gray-700 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Enter your email address"
              className="bg-transparent px-3 py-2 text-sm outline-none w-full"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="px-3 py-2 bg-gray-600 hover:bg-green-600 transition-colors"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
