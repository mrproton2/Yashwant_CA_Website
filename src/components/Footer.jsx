import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">

        {/* Left - Company Name */}
        <div>
          <h2 className="text-lg font-semibold tracking-wide">YashwantKumar & Associates</h2>
          <p className="text-sm text-gray-200">
            Trusted Accounting • Compliance • Taxation • Audits
          </p>
        </div>

        {/* Middle - Contact Info */}
        <div className="mt-4 md:mt-0 text-center md:text-left">

          {/* Clickable Phone */}
          <p className="text-sm text-gray-200">
            📞{" "}
            <a
              href="tel:+918286956020"
              className="font-medium underline hover:text-white cursor-pointer"
            >
              +91 8286956020
            </a>
          </p>

          {/* Clickable Email */}
          <p className="text-sm text-gray-200">
            ✉️{" "}
            <a
              href="mailto:contact@yashwantassociates.com?subject=Inquiry&body=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20services."
              className="font-medium underline hover:text-white"
            >
              contact@yashwantassociates.com
            </a>
          </p>
        </div>

        {/* Right - WhatsApp Button */}
        <a
          href="https://wa.me/918286956020?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.49 0 0 5.49 0 12.04c0 2.12.55 4.19 1.6 6.03L0 24l6.17-1.62a12.1 12.1 0 0 0 5.87 1.48h.01c6.55 0 12.04-5.49 12.04-12.04a11.93 11.93 0 0 0-3.57-8.34zM12.04 21.8h-.01a10.1 10.1 0 0 1-5.14-1.41l-.37-.22-3.66.96.98-3.56-.24-.37a9.76 9.76 0 0 1-1.5-5.15c0-5.43 4.42-9.85 9.85-9.85 2.63 0 5.1 1.02 6.96 2.88a9.78 9.78 0 0 1 2.89 6.97c0 5.43-4.42 9.85-9.86 9.85zm5.48-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.5-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52 0 1.48 1.08 2.92 1.23 3.12.15.2 2.13 3.25 5.16 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
          </svg>
          WhatsApp Us
        </a>

      </div>

      <div className="text-center mt-4 pb-4 text-sm text-gray-300">
        © {new Date().getFullYear()} YashwantKumar & Associates. All rights reserved.
      </div>
    </footer>
  );
}
