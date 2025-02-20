const Footer = () => {
    return (
      <footer className="w-full bg-white text-black py-6 mt-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">Golf App</h2>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
  
          {/* Center Section */}
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
            <a href="#" className="hover:text-gray-400">Mobile App</a>
          </div>
  
          {/* Right Section (Social Media Links) */}
          <div className="flex space-x-4">
            <a href="" className="hover:text-gray-400">Twitter</a>
            <a href="" className="hover:text-gray-400">Facebook</a>
            <a href="" className="hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  