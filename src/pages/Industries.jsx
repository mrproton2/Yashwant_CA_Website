import React from "react";

export default function Industries() {
  const industries = [
    { name: "Manufacturing", icon: "🏭" },
    { name: "Retail", icon: "🛍️" },
    { name: "E-commerce", icon: "🛒" },
    { name: "IT Services", icon: "💻" },
    { name: "Hospitality", icon: "🏨" },
    { name: "Healthcare", icon: "🩺" },
  ];

  return (
    <section className="py-10">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-6">Industries We Serve</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ name, icon }) => (
            <div
              key={name}
              className="p-6 border rounded-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-blue-50 hover:border-blue-400 hover:shadow-md hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-5xl mb-3">{icon}</div>
              <p className="text-lg font-medium">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
