import React from "react";
import { useParams, Link } from "react-router-dom";
import SERVICES from "../data/services";

import {
  InformationCircleIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

export default function ServiceDetail() {
  const { category, service } = useParams();

  const cat = SERVICES.find(c => c.id === category);
  const svc = cat?.items.find(i => i.id === service);

  if (!cat || !svc) {
    return (
      <section className="py-10">
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold">Service not found</h2>
          <p className="mt-2">
            Please go back to{" "}
            <Link to="/services" className="underline text-blue-700">
              Services
            </Link>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6">
      <div className="bg-white p-6 rounded-lg shadow max-w-3xl mx-auto">

        {/* Header Section */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <BriefcaseIcon className="w-8 h-8 text-blue-900" />
              {svc.title}
            </h2>
            <p className="text-slate-600 mt-2 flex items-center gap-1">
              <InformationCircleIcon className="w-5 h-5 text-slate-500" />
              Category: {cat.title}
            </p>
          </div>

          <Link
            to={`/services/${cat.id}`}
            className="text-sm text-blue-700 underline flex items-center gap-1 hover:text-blue-900"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to {cat.title}
          </Link>
        </div>

        {/* Content Section */}
        <div className="mt-8 text-slate-700 leading-relaxed">

          <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
            <ClipboardDocumentCheckIcon className="w-6 h-6 text-blue-900" />
            How We Help
          </h3>

          <p className="mb-4">
            We provide end-to-end assistance for <strong>{svc.title}</strong>.
            Our team ensures seamless documentation, filing, coordination with authorities,
            and complete compliance support — so you can focus on growing your business.
          </p>

          {/* Deliverables */}
          <h4 className="text-lg font-semibold mt-6 mb-2">Deliverables</h4>

          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5" />
              Initial consultation and requirement checklist
            </li>

            <li className="flex items-start gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5" />
              Document preparation and submission
            </li>

            <li className="flex items-start gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5" />
              Follow-up, compliance tracking & final closure
            </li>
          </ul>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              to="/contact"
              className="px-5 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
            >
              Request this Service
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
