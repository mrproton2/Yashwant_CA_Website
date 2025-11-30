import React from "react";
import { useParams, Link } from "react-router-dom";
import SERVICES from "../data/services";

export default function ServiceDetail() {
  const { category, service } = useParams();

  const cat = SERVICES.find(c => c.id === category);
  const svc = cat?.items.find(i => i.id === service);

  if (!cat || !svc) {
    return (
      <section className="py-10">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Service not found</h2>
          <p className="mt-2">Please go back to <Link to="/services" className="underline">services</Link>.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{svc.title}</h2>
            <p className="text-slate-600 mt-2">Category: {cat.title}</p>
          </div>
          <div className="text-sm text-slate-500">
            <Link to={`/services/${cat.id}`} className="underline">Back to {cat.title}</Link>
          </div>
        </div>

        <div className="mt-6 text-slate-700">
          <h3 className="font-semibold mb-2">How we help</h3>
          <p>
            We provide end-to-end support for <strong>{svc.title}</strong>. Our services include advisory,
            documentation, filing, follow-up with authorities, and compliance support. (This is a template description —
            replace with your firm-specific details.)
          </p>

          <h4 className="font-semibold mt-4">Deliverables</h4>
          <ul className="list-disc list-inside">
            <li>Initial consultation and checklist</li>
            <li>Document preparation and filing</li>
            <li>Follow-up and closure</li>
          </ul>

          <div className="mt-6">
            <Link to="/contact" className="px-4 py-2 bg-blue-900 text-white rounded">Request this Service</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
