'use client';

export default function ApiTestButton() {
  return (
    <button
      onClick={async () => {
        try {
          const res = await fetch('/api');
          const data = await res.json();
          alert(JSON.stringify(data, null, 2));
        } catch (error) {
          alert('Error: ' + error);
        }
      }}
      className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Test API Endpoint
    </button>
  );
}
