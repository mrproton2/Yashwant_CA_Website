import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, BriefcaseIcon } from "@heroicons/react/20/solid";
import logo from "../assets/logo.svg";
import SERVICES from "../data/services";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const onSelectService = (categoryId, serviceId) => {
    setOpen(false);
    setServicesOpen(false);
    navigate(`/services/${categoryId}/${serviceId}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="font-semibold text-lg hidden sm:inline tracking-wide">
              Yashwant CA
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-[16px]">
            <Link className="hover:text-accent transition" to="/">Home</Link>
            <Link className="hover:text-accent transition" to="/about">About Us</Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-accent transition">
                <BriefcaseIcon className="w-5 h-5" /> 
                Our Services 
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div className="absolute right-0 mt-3 w-96 bg-white text-dark rounded-lg shadow-xl ring-1 ring-black ring-opacity-10 p-4 max-h-72 overflow-auto z-50">

                  {SERVICES.map(cat => (
                    <div key={cat.id} className="mb-4 last:mb-0">
                      <div className="font-semibold text-primary">{cat.title}</div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {cat.items.slice(0, 6).map(item => (
                          <button
                            key={item.id}
                            className="text-sm px-2 py-1 rounded hover:bg-gray-100"
                            onClick={() => onSelectService(cat.id, item.id)}
                          >
                            {item.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}

                </div>
              )}
            </div>

            <Link className="hover:text-accent transition" to="/industries">Industries</Link>
            <Link className="hover:text-accent transition" to="/contact">Contact Us</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primaryLight text-white border-t border-white/20">
          <div className="px-4 py-4 space-y-3 text-[17px]">

            <Link onClick={() => setOpen(false)} to="/" className="block hover:text-accent">
              Home
            </Link>

            <Link onClick={() => setOpen(false)} to="/about" className="block hover:text-accent">
              About Us
            </Link>

            {/* Services Accordion */}
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span>Our Services</span>
                <ChevronDownIcon className="w-5 h-5 group-open:rotate-180 transition" />
              </summary>

              <div className="mt-2 pl-3 space-y-2 text-[16px]">
                {SERVICES.map(cat => (
                  <div key={cat.id}>
                    <div className="font-semibold text-accent">{cat.title}</div>
                    <div className="pl-3 mt-1 space-y-1">
                      {cat.items.map(item => (
                        <button
                          key={item.id}
                          onClick={() => onSelectService(cat.id, item.id)}
                          className="block w-full text-left hover:text-accent"
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </details>

            <Link onClick={() => setOpen(false)} to="/industries" className="block hover:text-accent">
              Industries
            </Link>

            <Link onClick={() => setOpen(false)} to="/contact" className="block hover:text-accent">
              Contact Us
            </Link>

          </div>
        </div>
      )}

    </header>
  );
}
