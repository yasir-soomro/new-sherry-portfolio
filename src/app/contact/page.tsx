"use client";

import React, { useState, useEffect, FormEvent, ChangeEvent, KeyboardEvent } from "react";

type AlertType = { type: "success" | "error"; message: string } | null;

// Define the shape of form data
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<AlertType>(null);
  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Email validation
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Auto dismiss alert
  useEffect(() => {
    if (!alert) return;
    const timer = setTimeout(() => setAlert(null), 5000);
    return () => clearTimeout(timer);
  }, [alert]);

  // Form submission
  const handleSubmit = async (e?: FormEvent) => {
    e?.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setAlert({ type: "error", message: "Please fill in all fields!" });
      return;
    }

    if (!validateEmail(email)) {
      setAlert({ type: "error", message: "Please enter a valid email address!" });
      return;
    }

    setLoading(true);
    setAlert(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call
      setAlert({ type: "success", message: "Your message has been sent successfully!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setAlert({ type: "error", message: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  // Ctrl+Enter submit
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.ctrlKey) handleSubmit();
  };

  // Define input fields
  const fields: { name: keyof FormData; type: string; label: string }[] = [
    { name: "name", type: "text", label: "Full Name" },
    { name: "email", type: "email", label: "Email Address" },
    { name: "subject", type: "text", label: "Subject" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-gray-900 flex items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-lime-300 dark:bg-lime-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 dark:bg-green-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-emerald-300 dark:bg-emerald-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-2xl w-full relative z-10">
        <form onSubmit={handleSubmit}>
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                <span className="bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 text-transparent bg-clip-text">
                  Get In Touch
                </span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                Have a question or want to work together? Let&apos;s connect!
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-5">
              {fields.map((field) => (
                <div key={field.name} className="relative">
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]} // ✅ type-safe
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    onKeyDown={handleKeyPress}
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-transparent focus:border-lime-500 dark:focus:border-lime-400 focus:outline-none transition-all duration-300"
                  />
                  <label
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData[field.name] || focusedField === field.name
                        ? "top-2 text-xs text-lime-600 dark:text-lime-400"
                        : "top-4 text-base text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {field.label}
                  </label>
                </div>
              ))}

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  onKeyDown={handleKeyPress}
                  placeholder=" "
                  rows={5}
                  className="peer w-full px-4 pt-6 pb-2 bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-transparent focus:border-lime-500 dark:focus:border-lime-400 focus:outline-none transition-all duration-300 resize-none"
                />
                <label
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    formData.message || focusedField === "message"
                      ? "top-2 text-xs text-lime-600 dark:text-lime-400"
                      : "top-4 text-base text-gray-500 dark:text-gray-400"
                  }`}
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Alert */}
      {alert && (
        <div className="fixed top-6 right-6 z-50 animate-slideIn">
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl ${
              alert.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            <span className="font-medium">{alert.message}</span>
            <button
              onClick={() => setAlert(null)}
              className="ml-2 hover:bg-white hover:bg-opacity-20 rounded-lg p-1 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes slideIn { from { transform: translateX(100%); opacity:0; } to { transform: translateX(0); opacity:1; } }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-slideIn { animation: slideIn 0.5s ease-out; }
      `}</style>
    </div>
  );
}
