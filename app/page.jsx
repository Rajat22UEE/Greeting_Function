'use client';

import Link from 'next/link';

import Greeting from " @/components/Greeting";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">

      <div className="space-y-3">
        <Greeting name="Alice" />

        <div className="space-y-4  justify-center">
          <h1 className="text-neutral-950 font-bold">Learn about Functional Components and Props</h1>
          <Link href="/functional-components">
            <button className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
              Click
            </button>
          </Link>
        </div>
      </div>

    </main>
  );
}
