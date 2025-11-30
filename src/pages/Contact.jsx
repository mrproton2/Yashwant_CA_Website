import React from "react";

export default function Contact() {
  return (
    <section className="py-10">
      <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

        <form className="space-y-4" onSubmit={(e)=>{ e.preventDefault(); alert("Form submitted (demo)"); }}>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input required className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" required className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea required className="w-full border rounded px-3 py-2" rows="4" />
          </div>

          <div>
            <button type="submit" className="px-4 py-2 bg-blue-900 text-white rounded">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
