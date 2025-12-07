import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Bars3Icon,
  XMarkIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  HomeIcon,
  InformationCircleIcon,
  BuildingOffice2Icon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import logo from "../assets/logo.svg";
import SERVICES from "../data/services";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();
  const hoverTimeout = useRef(null);

  /* -----------------------------
     FIX: Prevent page scroll when
     mobile menu is open
  ----------------------------- */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // lock scroll
    } else {
      document.body.style.overflow = "auto"; // restore scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [open]);

  const onSelectService = (categoryId, serviceId) => {
    setOpen(false);
    setServicesOpen(false);
    navigate(`/services/${categoryId}/${serviceId}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER MAIN */}
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="font-semibold text-lg hidden sm:inline tracking-wide">
              YashwantKumar & Associates
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-[16px]">

            <Link className="hover:text-accent transition flex items-center gap-1" to="/">
              <HomeIcon className="w-5 h-5" />
              Home
            </Link>

            <Link className="hover:text-accent transition flex items-center gap-1" to="/about">
              <InformationCircleIcon className="w-5 h-5" />
              About Us
            </Link>

            {/* SERVICES DROPDOWN (DESKTOP) */}
            <div
              className="relative"
              onMouseEnter={() => {
                clearTimeout(hoverTimeout.current);
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                hoverTimeout.current = setTimeout(
                  () => setServicesOpen(false),
                  250
                );
              }}
            >
              <button className="flex items-center gap-1 hover:text-accent transition">
                <BriefcaseIcon className="w-5 h-5" />
                Our Services
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div
                  className="absolute left-0 mt-2 pt-3 w-96 bg-white text-dark rounded-lg shadow-xl ring-1 ring-black ring-opacity-10 p-4 max-h-80 overflow-auto z-50 animate-fadeIn"
                  onMouseEnter={() => clearTimeout(hoverTimeout.current)}
                  onMouseLeave={() => {
                    hoverTimeout.current = setTimeout(
                      () => setServicesOpen(false),
                      250
                    );
                  }}
                >
                  {SERVICES.map((cat) => (
                    <div key={cat.id} className="mb-5 last:mb-0">
                      <div className="font-semibold text-primary flex items-center gap-1">
                        <BuildingOffice2Icon className="w-4 h-4" />
                        {cat.title}
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {cat.items.slice(0, 6).map((item) => (
                          <button
                            key={item.id}
                            className="text-sm px-2 py-1 rounded hover:bg-gray-100 transition"
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

            <Link className="hover:text-accent transition flex items-center gap-1" to="/industries">
              <BuildingOffice2Icon className="w-5 h-5" />
              Industries
            </Link>

            <Link className="hover:text-accent transition flex items-center gap-1" to="/contact">
              <PhoneIcon className="w-5 h-5" />
              Contact Us
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-primaryLight text-white border-t border-white/20 h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-4 text-[17px]">

            {/* LINKS */}
            <Link
              onClick={() => setOpen(false)}
              to="/"
              className="block flex items-center gap-2 hover:text-accent"
            >
              <HomeIcon className="w-5 h-5" /> Home
            </Link>

            <Link
              onClick={() => setOpen(false)}
              to="/about"
              className="block flex items-center gap-2 hover:text-accent"
            >
              <InformationCircleIcon className="w-5 h-5" /> About Us
            </Link>

            {/* MOBILE SERVICES ACCORDION */}
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="flex items-center gap-2">
                  <BriefcaseIcon className="w-5 h-5" /> Our Services
                </span>
                <ChevronDownIcon className="w-5 h-5 group-open:rotate-180 transition" />
              </summary>

              <div className="mt-2 pl-3 space-y-3 text-[16px]">
                {SERVICES.map((cat) => (
                  <div key={cat.id}>
                    <div className="font-semibold text-accent flex items-center gap-2">
                      <BuildingOffice2Icon className="w-4 h-4" />
                      {cat.title}
                    </div>

                    <div className="pl-3 mt-1 space-y-1">
                      {cat.items.map((item) => (
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

            <Link
              onClick={() => setOpen(false)}
              to="/industries"
              className="block flex items-center gap-2 hover:text-accent"
            >
              <BuildingOffice2Icon className="w-5 h-5" /> Industries
            </Link>

            <Link
              onClick={() => setOpen(false)}
              to="/contact"
              className="block flex items-center gap-2 hover:text-accent"
            >
              <PhoneIcon className="w-5 h-5" /> Contact Us
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
