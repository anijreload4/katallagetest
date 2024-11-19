import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8 min-h-screen bg-purple-50">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-purple-800">About Us</h1>
          <p className="text-gray-700 mb-8">
            Katallage Christian Network is a non-denominational ministry dedicated to sharing the love of Christ and helping people grow in their faith. We believe in the power of community, discipleship, and service.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-purple-800">Our History</h2>
          <p className="text-gray-700 mb-8">
            Founded in 2005, Katallage Christian Network started as a small group of believers meeting in a living room. Over the years, we have grown into a vibrant community of faith, reaching out to our local area and beyond.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-purple-800">Our Beliefs</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>We believe in the authority of the Bible as the inspired Word of God.</li>
            <li>We believe in the triune God: Father, Son, and Holy Spirit.</li>
            <li>We believe in the deity of Jesus Christ and His atoning sacrifice for our sins.</li>
            <li>We believe in the power of the Holy Spirit to transform lives.</li>
            <li>We believe in the importance of discipleship and spiritual growth.</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default About
