import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-purple-800 p-4 flex justify-between items-center">
      <div className="text-white font-bold">
        <Link href="/">Katallage Christian Network</Link>
      </div>
      <div>
        <ul className="flex space-x-4 text-purple-200">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/media">Media</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/lms">LMS</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
