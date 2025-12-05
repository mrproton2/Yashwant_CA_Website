import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9ts6uzc",      // ✔ Your EmailJS Service ID
        "template_m1qwl1u",     // ✔ Your Template ID
        formRef.current,
        "G4zyWdg940RSVmCG0"     // ✔ Your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="py-10">
      <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

        <form ref={formRef} className="space-y-4" onSubmit={sendEmail}>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              name="name"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              name="phone"
              type="tel"
              required
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit number"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              required
              className="w-full border rounded px-3 py-2"
              rows="4"
            />
          </div>

          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-900 text-white rounded"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
