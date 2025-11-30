import React from "react";
import { Link, useParams } from "react-router-dom";
import SERVICES from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const { category } = useParams();

  if (category) {
    const cat = SERVICES.find(c => c.id === category);
    if (!cat) {
      return <div className="py-10">Category not found</div>;
    }

    return (
      <section className="py-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{cat.title}</h2>
          <Link to="/services" className="text-sm underline">Back to all categories</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cat.items.map(item => (
            <ServiceCard key={item.id} categoryId={cat.id} service={item} />
          ))}
        </div>
      </section>
    );
  }

  // show categories overview
  return (
    <section className="py-6">
      <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SERVICES.map(cat => (
          <Link key={cat.id} to={`/services/${cat.id}`} className="block p-4 bg-white rounded-lg shadow hover:shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{cat.title}</h3>
              <div className="text-sm text-slate-500">{cat.items.length} services</div>
            </div>
            <p className="text-sm text-slate-600 mt-2">{cat.items.slice(0,3).map(i=>i.title).join(", ")}{cat.items.length>3?"...":""}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
