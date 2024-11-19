import Navbar from '../components/Navbar'

const LMS = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8 min-h-screen bg-purple-50">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-purple-800">Learning Management System</h1>
          <p className="text-gray-700 mb-8">
            Our Learning Management System (LMS) provides online courses and resources to help you grow in your faith.
          </p>
          <div className="bg-purple-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2 text-purple-800">Featured Course</h2>
            <p className="text-gray-700">
              Check out our featured course on "The Life of Jesus" and deepen your understanding of the Gospels.
            </p>
            <a href="#" className="text-purple-600 hover:text-purple-800">Enroll Now</a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LMS
