import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-rose-50 via-white to-rose-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-6 py-40 text-gray-800 dark:text-gray-100">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Info Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-rose-600 dark:text-rose-500 mb-4 leading-tight">
            Let&apos;s Bring Your Dream Wedding to Life
          </h1>
          <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
            Have a question, idea, or just want to say hello? We&apos;d love to
            hear from you. Reach out and let&apos;s make something magical
            together.
          </p>

          <ul className="space-y-3 mt-6 text-base text-gray-700 dark:text-gray-300">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@wedly.ng"
                className="text-rose-600 dark:text-rose-400 hover:underline"
              >
                support@wedly.ng
              </a>
            </li>
            <li>
              <strong>Office:</strong> 15 Eletu Ogabi Street, Lekki Phase 1,
              Lagos
            </li>
            <li>
              <strong>Hours:</strong> Mon - Fri: 9AM - 6PM
            </li>
          </ul>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-block bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 transition text-white px-6 py-3 rounded-full font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-rose-600 dark:text-rose-400">
            Contact Form
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-md px-4 py-3 focus:ring-2 focus:ring-rose-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="victor@example.com"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-md px-4 py-3 focus:ring-2 focus:ring-rose-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Type your message..."
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-md px-4 py-3 focus:ring-2 focus:ring-rose-400 outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 transition text-white py-3 rounded-md font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
