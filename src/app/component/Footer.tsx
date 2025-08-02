import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-[#202938] text-white px-6 py-10">
      <div className=" xl:max-w-[1500px] lg:max-w-7xl   mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">WEDLY</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            WEDLY connects Nigerian couples with trusted wedding coordinators to
            make every wedding smooth, stress-free, and unforgettable.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/coordinators"
                className="hover:text-white transition"
              >
                Browse Coordinators
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-white transition">
                Become a Coordinator
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-medium mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-white transition">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-medium mb-3">Connect With Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link
                href="https://x.com/SecureBootSammy"
                target="_blank"
                className="hover:text-white transition"
              >
                Twitter / X
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/ediong-seyene-samuel-42a092220/"
                target="_blank"
                className="hover:text-white transition"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://samuelvictor.vercel.app/"
                target="_blank"
                className="hover:text-white transition"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} WEDLY. All rights reserved.
      </div>
    </footer>
  );
}
