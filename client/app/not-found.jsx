import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex item-center items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl mb-6">🧙</div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Page Not Found!
        </h1>
        <p className="text-gray-500 text-xl mb-8">
            Oops! The page you're looking for doesn't exist.
        </p>
        <Link
        href="/"
        className="bg-blue-100 text-[#333] px-8 py-4 border-[#3333] border-2 rounded-xl font-semibold text-lg hover:bg-blue-300 hover:text-black transition"
        >
          ➜
        </Link>
      </div>
    </div>
  );
}
