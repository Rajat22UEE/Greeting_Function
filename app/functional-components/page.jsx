'use client';

import Greeting from '../../components/Greeting';

export default function FunctionalComponentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 p-6">
      <section className="max-w-4xl mx-auto space-y-8 rounded-xl bg-white shadow-xl p-10 border border-blue-100">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 drop-shadow-sm mb-6">
          🌟 Understanding Functional Components & Props
        </h1>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            In <strong className="text-blue-700">React</strong>, a <strong className="text-blue-600">functional component</strong> is a simple JavaScript function that returns JSX.
            It’s a lightweight and modern alternative to class-based components.
          </p>

          <p>
            <code className="bg-blue-100 px-1 rounded text-blue-700">props</code> (short for "properties") let you pass data from parent to child components, enabling reusability and flexibility.
          </p>

          <div className="bg-gray-100 p-5 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <p className="mb-2 font-semibold">Example of a Functional Component:</p>
            <pre className="bg-gray-200 p-3 rounded-md overflow-auto text-sm text-gray-800">
              <code>
{`function Greeting({ name }) {
  return <h1>Welcome, {name}!</h1>;
}`}
              </code>
            </pre>
          </div>

          <div className="mt-8">
            <p className="mb-4 font-semibold text-blue-600">
              ✅ Here’s how it looks in action:
            </p>
            <div className="border border-blue-300 rounded-lg p-6 bg-blue-50 shadow-inner">
              <Greeting name="Raj" />
            </div>
          </div>

          <p className="mt-6">
            You can now reuse this component by changing the <code className="bg-blue-100 px-1 rounded text-blue-700">name</code> prop to display a personalized message for anyone!
          </p>
        </div>
      </section>
    </main>
  );
}
