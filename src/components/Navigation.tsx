import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function goToHomeSection(sectionId: string) {
    setIsOpen(false);

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToSection();
      }, 300);
    } else {
      scrollToSection();
    }
  }

  function goHome() {
    setIsOpen(false);
    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-8 py-5 bg-white/90 backdrop-blur-sm border-b-2 border-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          type="button"
          onClick={goHome}
          className="flex items-center gap-3 group logo-group cursor-pointer"
        >
          <img
            src="/images/logo.png"
            alt="Redpxls Logo"
            className="w-8 h-8 object-contain"
          />

          <span className="text-xl font-black tracking-tighter uppercase">
            Red
            <span className="text-red-600 transition-colors group-hover:text-black">
              pxls
            </span>
          </span>
        </button>

        <div className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-widest">
          <button
            type="button"
            onClick={() => goToHomeSection("process")}
            className="nav-link hover:text-red-600 transition-colors"
          >
            Process
          </button>

          <button
            type="button"
            onClick={() => goToHomeSection("work")}
            className="nav-link hover:text-red-600 transition-colors"
          >
            Work
          </button>

          <button
            type="button"
            onClick={() => goToHomeSection("casestudies")}
            className="nav-link hover:text-red-600 transition-colors"
          >
            Case Studies
          </button>

          <Link
            to="/about"
            className="nav-link hover:text-red-600 transition-colors"
          >
            About us
          </Link>

          <Link
            to="/contact-us"
            className="nav-link hover:text-red-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/bookcall"
            className="pixel-button text-xs tracking-widest uppercase hidden sm:inline-flex"
          >
            Book a Call
          </Link>

          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-2 border-black p-6 flex flex-col gap-6 font-bold uppercase tracking-widest shadow-xl">
          <button
            type="button"
            onClick={() => goToHomeSection("process")}
            className="text-left hover:text-red-600"
          >
            Process
          </button>

          <button
            type="button"
            onClick={() => goToHomeSection("work")}
            className="text-left hover:text-red-600"
          >
            Work
          </button>

          <button
            type="button"
            onClick={() => goToHomeSection("casestudies")}
            className="text-left hover:text-red-600"
          >
            Case Studies
          </button>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-600"
          >
            About us
          </Link>

          <Link
            to="/contact-us"
            onClick={() => setIsOpen(false)}
            className="pixel-button text-xs tracking-widest uppercase text-center mt-4"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}