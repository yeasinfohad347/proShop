// app/not-found.jsx  (for Next.js App Router)

import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-6xl font-bold text-orange-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-800">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      >
        Back to Home
      </Link>
    </div>
  )
}
