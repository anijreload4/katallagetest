import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8 min-h-screen bg-purple-50">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-purple-800">Contact Us</h1>
          <p className="text-gray-700 mb-8">
            We'd love to hear from you! Feel free to reach out with any questions or inquiries.
          </p>
          <div className="bg-purple-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2 text-purple-800">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Email: info@katallage.org
            </p>
            <p className="text-gray-700 mb-4">
              Phone: (123) 456-7890
            </p>
            <p className="text-gray-700">
              Address: 123 Main Street, Anytown USA
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
