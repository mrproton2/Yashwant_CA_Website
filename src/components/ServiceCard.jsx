import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ categoryId, service }) {
  return (
    <Link to={`/services/${categoryId}/${service.id}`} className="block border rounded-lg p-4 hover:shadow-lg bg-white">
      <h3 className="font-semibold mb-1">{service.title}</h3>
      <p className="text-sm text-slate-500">Click to view details & how we help with {service.title}.</p>
    </Link>
  );
}
