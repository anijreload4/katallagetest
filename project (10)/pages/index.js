import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-8 min-h-screen bg-purple-50">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-purple-800">Welcome to Katallage Christian Network</h1>
          <p className="text-gray-700 mb-8">
            We are a ministry dedicated to spreading the love of Christ and helping people grow in their faith.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2 text-purple-800">Our Mission</h2>
              <p className="text-gray-700">
                Our mission is to share the gospel, disciple believers, and serve our community with love and compassion.
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2 text-purple-800">Get Involved</h2>
              <p className="text-gray-700">
                Join us for our weekly services, participate in our small groups, or volunteer in our outreach programs.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
