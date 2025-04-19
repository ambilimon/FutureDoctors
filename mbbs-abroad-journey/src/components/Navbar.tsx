import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";

import { ShimmerButton } from "@/components/ShimmerButton";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

import CountryNavigation from "./CountryNavigation";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const { country } = useParams();

  const isCountryPage = location.pathname.startsWith("/country/");
  const formattedCountry = country
    ? country.charAt(0).toUpperCase() + country.slice(1)
    : null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/universities", label: "Universities" },
    { href: "/#application", label: "Apply Now" },
    { href: "/#contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Logo variant={scrolled ? "default" : "default"} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`nav-link font-medium ${
                isActive(link.href) ? "active" : ""
              }`}
              onClick={handleNavClick}
            >
              {link.label}
            </Link>
          ))}

          <CountryNavigation currentCountry={formattedCountry} />

          <ShimmerButton
            variant="primary"
            size="sm"
            className="ml-2 rounded-full px-5"
          >
            <Link to="/#application" className="text-white">
              Apply Now
            </Link>
          </ShimmerButton>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-white z-50 transform transition-all duration-300 ease-in-out",
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-[-100%] opacity-0 pointer-events-none"
        )}
      >
        <div className="container h-full px-4 mx-auto py-8 flex flex-col">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "block text-lg font-medium transition-colors",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                )}
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            ))}

            {isCountryPage && formattedCountry && (
              <span className="block text-lg font-semibold text-primary">
                {formattedCountry}
              </span>
            )}
          </div>

          <div className="mt-auto py-6">
            <ShimmerButton variant="primary" className="w-full rounded-full">
              <Link
                to="/#application"
                className="text-white"
                onClick={handleNavClick}
              >
                Apply Now
              </Link>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
