import React from "react";

export default function Industries() {
  const sample = ["Manufacturing", "Retail", "E-commerce", "IT Services", "Hospitality", "Healthcare"];
  return (
    <section className="py-10">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Industries we serve</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sample.map(i => (
            <div key={i} className="p-4 border rounded">{i}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
