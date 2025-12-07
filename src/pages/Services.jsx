import React from "react";
import { Link, useParams } from "react-router-dom";
import SERVICES from "../data/services";
import ServiceCard from "../components/ServiceCard";

import {
  Squares2X2Icon,
  FolderOpenIcon,
  ArrowLeftIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  const { category } = useParams();

  /* ------------------------------
      INDIVIDUAL CATEGORY VIEW
  ------------------------------- */
  if (category) {
    const cat = SERVICES.find((c) => c.id === category);

    if (!cat) {
      return <div className="py-10 text-center text-xl">Category not found</div>;
    }

    return (
      <section className="py-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FolderOpenIcon className="w-7 h-7 text-blue-900" />
            {cat.title}
          </h2>

          <Link to="/services" className="text-sm underline flex items-center gap-1 text-blue-700">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to all categories
          </Link>
        </div>

        {/* Services under category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cat.items.map((item) => (
            <ServiceCard
              key={item.id}
              categoryId={cat.id}
              service={item}
            />
          ))}
        </div>
      </section>
    );
  }

  /* ------------------------------
      ALL CATEGORY VIEW
  ------------------------------- */
  return (
    <section className="py-6">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Squares2X2Icon className="w-8 h-8 text-blue-900" />
        Our Services
      </h2>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {SERVICES.map((cat) => (
          <Link
            key={cat.id}
            to={`/services/${cat.id}`}
            className="block p-5 bg-white rounded-xl shadow border hover:shadow-lg hover:border-blue-400 transition cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <BriefcaseIcon className="w-6 h-6 text-blue-900" />
                {cat.title}
              </h3>

              <div className="text-sm text-slate-500">
                {cat.items.length} services
              </div>
            </div>

            {/* Short service preview */}
            <p className="text-sm text-slate-600 mt-3">
              {cat.items.slice(0, 3).map((i) => i.title).join(", ")}
              {cat.items.length > 3 ? "..." : ""}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
