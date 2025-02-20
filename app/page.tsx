import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Welcome to Jobet</h1>
        <p className="mt-4 text-xl">Your AI-powered travel planning assistant</p>
        <Link
          href="/plan"
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Start Planning Your Trip
        </Link>
      </div>
    </main>
  )
}

