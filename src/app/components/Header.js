''
import Link from "next/link";

const Header = () => {
  return (
    <header className="md:fixed md:top-5 w-full transform z-50 ">
      <div className="bg-white shadow-sm container md:rounded-xl max-w-7xl px-4 md:px-5 lg:px-5 mx-auto py-4 flex justify-between items-center flex-row">
        {/* Logo */}
        <div className="text-2xl font-bold text-text">
          <Link href="/">SINOLINK</Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 space-x-reverse">
          <Link href="/" className="text-text hover:text-hover transition-colors">
            الرئيسية
          </Link>
          <Link href="#about" className="text-text hover:text-hover transition-colors">
            من نحن
          </Link>
          <Link href="#services" className="text-text hover:text-hover transition-colors">
            خدماتنا
          </Link>
          <Link href="#videos" className="text-text hover:text-hover transition-colors">
          فيديوهات 
          </Link>
        </nav>

        {/* Apply Now Button */}
        <div>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdXjXek-f4uYjIRaRyQAUYnLHSLjmgPpH5-wG8W-oFnt-HIuQ/viewform?usp=header" target="_blank" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-hover transition-colors">
            قدم الآن
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;