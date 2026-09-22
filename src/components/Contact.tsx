import React, { useState } from "react";

interface ContactProps {
  data?: {
    contactInfo?: {
      email: string;
      location: string;
      phone: string;
    };
  };
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  // Graceful data fallbacks matching your nested object schemas
  const info = data?.contactInfo || {
    email: "vis6ky@gmail.com",
    location: "Port Saeed, Deira, Dubai",
    phone: "+971 55 233 6715",
  };

  // Form Handling State Variables
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg({ type: "", text: "" });

    // Call the direct backend fetch task pipeline
    await sendMessage(formData);
    setIsSubmitting(false);
  };

  const sendMessage = async (currentData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: currentData.name,
          email: currentData.email,
          subject: currentData.subject,
          message: currentData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMsg({
          type: "success",
          text: "Message delivered directly to Vishal's inbox! 🎉",
        });
        // Empty out fields upon successful confirmation
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error: any) {
      setStatusMsg({
        type: "error",
        text: error.message || "Failed to establish a network connection.",
      });
    }
  };

  return (
    <div className="container w-full mx-auto px-4">
      {/* Header Identity Block Area */}
      <div className="title mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-sky-500">
          Inquiries
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
          Get in Touch
        </h1>
        <p className="text-sm text-slate-500 font-medium mt-1.5">
          Feel free to reach out for collaborations or project inquiries.
        </p>
      </div>

      {/* Split Screen Contact Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* 1. LEFT COLUMN: Contact Metadata Blocks (Upgraded with light borders and soft icon frames) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Email Block */}
          <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-sky-500/20 transition-all duration-300">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-sky-50 border border-sky-100/60 text-sky-500 shadow-inner flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Email Address
              </span>
              <p className="text-sm font-semibold text-slate-800 mt-0.5 truncate">
                <a
                  href={`mailto:${info.email}`}
                  className="text-slate-700 hover:text-sky-600 transition-colors duration-150"
                >
                  {info.email}
                </a>
              </p>
            </div>
          </div>

          {/* Location Block */}
          <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-sky-500/20 transition-all duration-300">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100/60 text-indigo-500 shadow-inner flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Location Base
              </span>
              <p className="text-sm font-semibold text-slate-700 mt-0.5 truncate">
                {info.location}
              </p>
            </div>
          </div>

          {/* Phone Block */}
          <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-sky-500/20 transition-all duration-300">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100/60 text-emerald-500 shadow-inner flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Mobile Hub
              </span>
              <p className="text-sm font-semibold text-slate-700 mt-0.5 truncate">
                <a
                  href={`tel:${info.phone}`}
                  className="text-slate-700 hover:text-sky-600 transition-colors duration-150"
                >
                  {info.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* 2. RIGHT COLUMN: Light-Themed Clean Interactive Native Messaging Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-6 p-6 rounded-2xl border border-slate-200 bg-slate-50/40 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b-2 border-slate-200 focus:border-sky-500 text-sm py-3 px-1 outline-none transition-colors duration-200 text-slate-800 font-medium placeholder-slate-400"
              />
            </div>

            <div>
              <input
                type="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b-2 border-slate-200 focus:border-sky-500 text-sm py-3 px-1 outline-none transition-colors duration-200 text-slate-800 font-medium placeholder-slate-400"
              />
            </div>

            <div>
              <input
                type="text"
                required
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full bg-transparent border-b-2 border-slate-200 focus:border-sky-500 text-sm py-3 px-1 outline-none transition-colors duration-200 text-slate-800 font-medium placeholder-slate-400"
              />
            </div>

            <div>
              <textarea
                required
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b-2 border-slate-200 focus:border-sky-500 text-sm py-3 px-1 outline-none transition-colors duration-200 text-slate-800 font-medium placeholder-slate-400 resize-none leading-relaxed"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 bg-sky-500 hover:bg-sky-600 disabled:bg-slate-300 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all duration-200 shadow-md shadow-sky-500/10 active:scale-[0.995] disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Dispatching Message..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
