import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Website</h1>
        <p className="text-xl text-gray-600 mb-8">
          Full-stack TypeScript Developer
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            About Me
          </Link>
        </div>
      </div>
    </main>
  );
}