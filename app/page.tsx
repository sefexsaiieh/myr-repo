import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Welcome to Jobet</h1>
      <p className="text-xl mb-8">Your AI-powered travel planning assistant</p>
      <Link href="/plan" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Start Planning Your Trip
      </Link>
    </main>
  )
}

