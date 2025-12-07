import React from "react";
import {
  BuildingOffice2Icon,
  ShieldCheckIcon,
  UsersIcon,
  ChartBarIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  return (
    <section className="py-10">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <BuildingOffice2Icon className="w-8 h-8 text-blue-900" />
          <h2 className="text-3xl font-semibold">
            About YashwantKumar & Associates
          </h2>
        </div>

        {/* Main Description */}
        <p className="text-slate-700 mb-4">
          <strong>YashwantKumar & Associates</strong> is a trusted Chartered
          Accountancy firm committed to delivering reliable, transparent, and
          result-oriented financial solutions. With deep expertise in auditing,
          accounting, taxation, and compliance, we help individuals and
          businesses make confident and well-informed financial decisions.
        </p>

        <p className="text-slate-700 mb-4">
          Our team blends professional experience with technology-driven
          processes to simplify even the most complex financial challenges. We
          believe in offering clarity, accuracy, and timely results—values that
          our clients appreciate the most.
        </p>

        <p className="text-slate-700 mb-4">
          Whether you're a startup, MSME, corporate business, or individual
          taxpayer, we provide tailored support that ensures compliance, reduces
          risk, and drives financial growth.
        </p>

        {/* Mission Box */}
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg mt-6">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
            <ShieldCheckIcon className="w-6 h-6 text-blue-800" />
            Our Mission
          </h3>
          <p className="text-slate-700">
            To provide <strong>clarity</strong>, <strong>confidence</strong>,
            and <strong>compliance</strong> — enabling you to focus on what truly
            matters: <span className="text-blue-900 font-semibold">
              growing your business.
            </span>
          </p>
        </div>

        {/* Highlights Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="p-5 border rounded-lg bg-slate-50 hover:shadow-md transition">
            <UsersIcon className="w-8 h-8 text-blue-900 mb-3" />
            <h4 className="font-semibold mb-1">Client-Focused Approach</h4>
            <p className="text-sm text-slate-700">
              We deliver personalized solutions that match each client’s unique
              business needs.
            </p>
          </div>

          <div className="p-5 border rounded-lg bg-slate-50 hover:shadow-md transition">
            <ChartBarIcon className="w-8 h-8 text-blue-900 mb-3" />
            <h4 className="font-semibold mb-1">Expert Guidance</h4>
            <p className="text-sm text-slate-700">
              Our experienced professionals ensure compliance, optimize finances,
              and support long-term growth.
            </p>
          </div>

          <div className="p-5 border rounded-lg bg-slate-50 hover:shadow-md transition">
            <CheckBadgeIcon className="w-8 h-8 text-blue-900 mb-3" />
            <h4 className="font-semibold mb-1">Reliable & Transparent</h4>
            <p className="text-sm text-slate-700">
              We maintain integrity, accuracy, and transparency in every service
              we deliver.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
