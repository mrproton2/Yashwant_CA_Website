import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="py-10">
      <div className="rounded-xl bg-white shadow px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Professional CA Services — Trust. Accuracy. Compliance.</h1>
            <p className="text-slate-600 mb-6">
              YashwantKumar & Associates offers end-to-end services for incorporations, ROC compliance, taxation, registrations, audits and more.
              We help businesses of all sizes stay compliant and grow.
            </p>
            <div className="flex gap-3">
              <Link to="/services" className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">Our Services</Link>
              <Link  className="px-4 py-2 border rounded hover:bg-slate-50">Contact Us</Link>
               {/* <Link to="/contact" className="px-4 py-2 border rounded hover:bg-slate-50">Contact Us</Link> */}
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Why choose us?</h3>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Trusted CA with practical compliance experience</li>
              <li>Transparent pricing and timely deliverables</li>
              <li>Customized services for startups, SMEs and enterprises</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-semibold mb-2">Incorporation</h4>
          <p className="text-slate-600">Company formation, LLP, OPC, Partnership and NPO registrations.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-semibold mb-2">Tax & Compliance</h4>
          <p className="text-slate-600">GST, Income Tax, TDS, PF/ESIC, Professional Tax and more.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-semibold mb-2">Audit & Assurance</h4>
          <p className="text-slate-600">Statutory & tax audits, due diligence and transfer pricing support.</p>
        </div>
      </div>
    </section>
  );
}
