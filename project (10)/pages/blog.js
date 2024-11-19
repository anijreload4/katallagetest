import Navbar from '../components/Navbar'

const Blog = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8 min-h-screen bg-purple-50">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-purple-800">Blog</h1>
          <p className="text-gray-700 mb-8">
            Read our latest blog posts and stay updated with what's happening in our ministry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2 text-purple-800">Latest Post</h2>
              <p className="text-gray-700">
                Check out our latest blog post on the importance of prayer.
              </p>
              <a href="#" className="text-purple-600 hover:text-purple-800">Read More</a>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2 text-purple-800">Popular Posts</h2>
              <p className="text-gray-700">
                Explore our most popular blog posts on various topics.
              </p>
              <a href="#" className="text-purple-600 hover:text-purple-800">View Popular Posts</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Blog
