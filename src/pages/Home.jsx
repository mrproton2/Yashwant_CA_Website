import React from "react";
import { Link } from "react-router-dom";
import {
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
  BriefcaseIcon,
  CurrencyRupeeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <section className="py-10">
      {/* HERO SECTION */}
      <div className="rounded-xl bg-white shadow px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Professional CA Services — <span className="text-blue-900">Trust. Accuracy. Compliance.</span>
            </h1>

            <p className="text-slate-600 mb-6">
              YashwantKumar & Associates provides end-to-end solutions for business incorporations,
              ROC compliance, taxation, registrations, audits and more.  
              We help startups, SMEs and enterprises stay compliant and grow with confidence.
            </p>

            <div className="flex gap-3">
              <Link
                to="/services"
                className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
              >
                Our Services
              </Link>

              <Link
                to="/contact"
                className="px-4 py-2 border rounded hover:bg-slate-50 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Content — Why Choose Us */}
          <div className="bg-slate-50 rounded-lg p-6 border">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <ShieldCheckIcon className="w-6 h-6 text-blue-900" />
              Why choose us?
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" />
                Trusted CA with practical compliance experience
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" />
                Transparent pricing and timely deliverables
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" />
                Customized services for startups, SMEs & enterprises
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* SERVICE CARDS */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg border hover:border-blue-400 transition cursor-pointer">
          <div className="flex items-center gap-2 mb-2">
            <BuildingOfficeIcon className="w-6 h-6 text-blue-900" />
            <h4 className="font-semibold">Incorporation</h4>
          </div>
          <p className="text-slate-600">
            Company formation, LLP, OPC, Partnership and NGO/NPO registrations.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg border hover:border-blue-400 transition cursor-pointer">
          <div className="flex items-center gap-2 mb-2">
            <CurrencyRupeeIcon className="w-6 h-6 text-blue-900" />
            <h4 className="font-semibold">Tax & Compliance</h4>
          </div>
          <p className="text-slate-600">
            GST, Income Tax, TDS, PF/ESIC, ROC filings, Professional Tax & more.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg border hover:border-blue-400 transition cursor-pointer">
          <div className="flex items-center gap-2 mb-2">
            <ClipboardDocumentListIcon className="w-6 h-6 text-blue-900" />
            <h4 className="font-semibold">Audit & Assurance</h4>
          </div>
          <p className="text-slate-600">
            Statutory audits, tax audits, due diligence & financial reporting.
          </p>
        </div>

      </div>
    </section>
  );
}
