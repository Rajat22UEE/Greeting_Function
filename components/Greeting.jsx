export default function Greeting({ name }) {
  return (
    <div className="bg-blue-100 text-center p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-700">
        Welcome, {name}!
      </h1>
    </div>
  );
}
