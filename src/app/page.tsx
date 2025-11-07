import ApiTestButton from '../components/ApiTestButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Zero Touch Deployment System</h1>
                <p className="mb-8 text-center">This is a demo project showcasing a complete CI/CD pipeline using:</p>
                <ul className="list-disc space-y-2 ml-8 mb-8">
                  <li>Next.js</li>
                  <li>Docker</li>
                  <li>GitHub Actions</li>
                  <li>GitHub Container Registry</li>
                  <li>Render for deployment</li>
                </ul>
                <div className="mt-5 text-center">
                  <ApiTestButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
