import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-50 sm:relative sm:z-auto dark:bg-info  bg-gray-900 p-6 sm:p-10 text-white">
      <div className="container mx-auto w-[90%]">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <span className="footer-title">Services</span>
            <Link href="/" className="link-hover block cursor-pointer">
              Branding
            </Link>
            <Link href="/" className="link-hover block cursor-pointer">
              Design
            </Link>
            <Link href="/" className="link-hover block cursor-pointer">
              Marketing
            </Link>
            <Link href="/" className="link-hover block cursor-pointer">
              Advertisement
            </Link>
          </div>

          <div className="space-y-4">
            <span className="footer-title">Company</span>
            <Link href="/" className="link-hover block cursor-pointer">
              About us
            </Link>
            <Link href="/" className="link-hover block cursor-pointer">
              Contact
            </Link>
            <Link href="/" className="link-hover block cursor-pointer">
              Jobs
            </Link>
            <Link href="/" className="link-hover block cursor-pointer">
              Press kit
            </Link>
          </div>

          <div className="space-y-4">
            <span className="footer-title">Legal</span>
            <Link href="/" className="link-hover block cursor-pointer">
              Terms of use
            </Link>
            <Link href="/" className="link-hover block cursor-pointer">
              Privacy policy
            </Link>
            <Link href="/" className="link-hover block cursor-pointer">
              Cookie policy
            </Link>
          </div>

          <div className="space-y-4">
            <span className="footer-title">Follow us</span>
            <Link href="/" className="link-hover block cursor-pointer">
              Facebook
            </Link>
            <Link
              href="https://x.com/SecureBootSammy"
              className="link-hover block cursor-pointer"
            >
              Twitter
            </Link>
            <Link
              href="https://samuelvictor.vercel.app/"
              className="link-hover block cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              href="https://www.linkedin.com/in/victor-samuel-42a092220/"
              className="link-hover block cursor-pointer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
