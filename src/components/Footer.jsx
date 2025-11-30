import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        
        <div>
          <h2 className="text-lg font-semibold tracking-wide">Yashwant CA</h2>
          <p className="text-sm text-gray-200">
            Trusted Accounting • Compliance • Taxation • Audits
          </p>
        </div>

        <p className="text-sm text-gray-300 mt-4 md:mt-0">
          © {new Date().getFullYear()} Yashwant CA. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}
