import Navbar from '../components/Navbar'

const Media = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8 min-h-screen bg-purple-50">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-purple-800">Media</h1>
          <p className="text-gray-700 mb-8">
            Here you can find our latest sermons, podcasts, and other media resources.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2 text-purple-800">Sermons</h2>
              <p className="text-gray-700">
                Listen to our latest sermons and be inspired by the Word of God.
              </p>
              <a href="#" className="text-purple-600 hover:text-purple-800">View Sermons</a>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2 text-purple-800">Podcasts</h2>
              <p className="text-gray-700">
                Check out our podcasts for in-depth discussions on various topics.
              </p>
              <a href="#" className="text-purple-600 hover:text-purple-800">Listen to Podcasts</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Media
