import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-between md:flex-row">
        {/* Logo or App Name */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">MyWebsite</h1>
          <p className="text-sm text-gray-400">Infomart</p>
        </div>

        {/* Links Section */}
        <div className="flex gap-8 mb-4 md:mb-0">
          <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-500 transition-colors">About</Link>
          <Link href="/articles" className="hover:text-blue-500 transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
        </div>

        {/* Social Media */}
        <div className="flex gap-6">
          <Link href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} GreenFuture. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
