import Greeting from '@/components/Greeting';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <Greeting name="Alice" />
    </main>
  );
}
