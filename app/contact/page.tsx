"use client";

import type React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setStatus("Thanks! We will get back to you within 24 hours.");
      setIsSubmitting(false);
    }, 1000);
  }

  const contactInfo = [
    {
      title: "General Inquiries",
      content: [
        { label: "Email", value: "info@mitm.ac.in", type: "email" },
        { label: "Phone", value: "+91 00000 00000", type: "phone" },
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Admissions Office",
      content: [
        { label: "Email", value: "admissions@mitm.ac.in", type: "email" },
        { label: "Phone", value: "+91 00000 00001", type: "phone" },
      ],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Academic Support",
      content: [
        { label: "Email", value: "academic@mitm.ac.in", type: "email" },
        { label: "Phone", value: "+91 00000 00002", type: "phone" },
      ],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--surface)] via-[var(--muted)]/30 to-[var(--surface)] pt-28 pb-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/8 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[var(--secondary)]/6 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[var(--highlight)]/4 to-transparent rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.3)_1px,transparent_0)] bg-[size:50px_50px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent rounded-full" />
              <span className="text-sm font-bold text-[color:var(--secondary)] uppercase tracking-[0.2em]">
                Get in Touch
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-[var(--secondary)] to-transparent rounded-full" />
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>

            <p className="text-xl text-[color:var(--text-light)] max-w-3xl mx-auto leading-relaxed">
              Have questions about admissions, programs, or campus life? We're
              here to help you on your educational journey. Reach out to us and
              we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold text-[color:var(--primary)] mb-4">
                  Send us a Message
                </h2>
                <p className="text-[color:var(--text-light)] leading-relaxed">
                  Fill out the form below and our team will get back to you as
                  soon as possible. For urgent matters, please call us directly.
                </p>
              </div>

              {/* Enhanced Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-8 shadow-xl"
              >
                {/* Form Fields Row 1 */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group">
                    <label className="block text-sm font-semibold text-[color:var(--text)] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        required
                        className="w-full rounded-2xl border-2 border-[var(--border)] bg-[color:var(--surface)] px-4 py-3 text-[color:var(--text)] outline-none transition-all duration-300 focus:border-[var(--secondary)] focus:ring-4 focus:ring-[var(--secondary)]/10 hover:border-[var(--primary)]/50"
                        placeholder="Enter your full name"
                      />
                      <div className="absolute top-3 right-3 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-5 h-5 text-[color:var(--secondary)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-[color:var(--text)] mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        className="w-full rounded-2xl border-2 border-[var(--border)] bg-[color:var(--surface)] px-4 py-3 text-[color:var(--text)] outline-none transition-all duration-300 focus:border-[var(--secondary)] focus:ring-4 focus:ring-[var(--secondary)]/10 hover:border-[var(--primary)]/50"
                        placeholder="your.email@example.com"
                      />
                      <div className="absolute top-3 right-3 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-5 h-5 text-[color:var(--secondary)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Fields Row 2 */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group">
                    <label className="block text-sm font-semibold text-[color:var(--text)] mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        className="w-full rounded-2xl border-2 border-[var(--border)] bg-[color:var(--surface)] px-4 py-3 text-[color:var(--text)] outline-none transition-all duration-300 focus:border-[var(--secondary)] focus:ring-4 focus:ring-[var(--secondary)]/10 hover:border-[var(--primary)]/50"
                        placeholder="+91 00000 00000"
                      />
                      <div className="absolute top-3 right-3 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-5 h-5 text-[color:var(--secondary)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-[color:var(--text)] mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <select
                        required
                        className="w-full rounded-2xl border-2 border-[var(--border)] bg-[color:var(--surface)] px-4 py-3 text-[color:var(--text)] outline-none transition-all duration-300 focus:border-[var(--secondary)] focus:ring-4 focus:ring-[var(--secondary)]/10 hover:border-[var(--primary)]/50"
                      >
                        <option value="">Select a subject</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="programs">Program Information</option>
                        <option value="general">General Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-[color:var(--text)] mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      required
                      rows={6}
                      className="w-full rounded-2xl border-2 border-[var(--border)] bg-[color:var(--surface)] px-4 py-3 text-[color:var(--text)] outline-none transition-all duration-300 focus:border-[var(--secondary)] focus:ring-4 focus:ring-[var(--secondary)]/10 hover:border-[var(--primary)]/50 resize-none"
                      placeholder="Tell us about your inquiry, questions, or how we can help you..."
                    />
                    <div className="absolute top-3 right-3 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-5 h-5 text-[color:var(--secondary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0v10a2 2 0 002 2h10a2 2 0 002-2V8m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className=" cursor-pointer group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--secondary)]/95 to-[var(--highlight)] px-8 py-4 font-semibold text-[color:var(--secondary-foreground)] shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[var(--secondary)]/25 hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--highlight)] to-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>

                  {status && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm font-medium">{status}</span>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Right Column - Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information Cards */}
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 border border-[var(--secondary)]/20 shadow-xl backdrop-blur-md hover:shadow-2xl transition-all duration-500">
                {/* Heading */}
                <h3 className="font-serif text-3xl font-bold text-[color:var(--primary)] mb-8 text-center">
                  Get in Touch
                </h3>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--highlight)] text-white shadow-lg hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="max-w-md mx-auto space-y-5 text-center">
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-[color:var(--primary)] mb-2">
                      Inquiry
                    </h4>
                    {/* <p className="text-sm text-[color:var(--text-light)]">
                      <span className="font-medium text-[color:var(--secondary)]">
                        Email:
                      </span>{" "}
                      <a
                        href="mailto:sales@yourstore.com"
                        className="hover:text-[color:var(--highlight)] transition-colors duration-300"
                      >
                        sales@yourstore.com
                      </a>
                    </p> */}
                    <p className="text-sm text-[color:var(--text-light)]">
                      <span className="font-medium text-[color:var(--secondary)]">
                        Phone:
                      </span>{" "}
                      <a
                        href="tel:+918765432109"
                        className="hover:text-[color:var(--highlight)] transition-colors duration-300"
                      >
                        +91 8275428401
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Campus Address */}
              <div className=" bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-6 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className=" inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--highlight)] text-white shadow-lg hover:scale-110 transition-transform duration-300">
                    <svg
                      className=" w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>

                <h4 className="font-serif text-lg  text-center font-bold text-[color:var(--primary)] mb-3">
                  Campus Address
                </h4>

                <div className="space-y-2  text-center text-sm text-[color:var(--text-light)]">
                  <p>MARATHWADA INSTITUTE OF</p>
                  <p>TECHNOLOGY AND MANAGEMENT</p>
                  <p>Umari, Dist. Nanded - 431807</p>
                  <p>Maharashtra, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-6 shadow-lg">
                <h4 className="font-serif text-lg font-bold text-[color:var(--primary)] mb-4">
                  Connect With Us
                </h4>

                <div className="flex gap-4">
                  {[
                    {
                      name: "Facebook",
                      icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                    },
                    {
                      name: "Twitter",
                      icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                    },
                    {
                      name: "LinkedIn",
                      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                    },
                    {
                      name: "Instagram",
                      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                    },
                  ].map((social, index) => (
                    <a
                      key={social.name}
                      href="#"
                      className="group p-3 rounded-xl bg-gradient-to-br from-[var(--muted)]/50 to-[var(--muted)]/30 border border-[var(--border)]/50 hover:border-[var(--secondary)]/40 hover:bg-gradient-to-br hover:from-[var(--secondary)]/10 hover:to-[var(--highlight)]/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    >
                      <svg
                        className="w-5 h-5 text-[color:var(--text-light)] group-hover:text-[var(--secondary)] transition-colors duration-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}

      <Footer />
    </main>
  );
}

// "use client"

// import type React from "react"

// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import { useState } from "react"

// export default function ContactPage() {
//   const [status, setStatus] = useState<string | null>(null)

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     setStatus("Thanks! We will get back to you soon.")
//   }

//   return (
//     <main>
//       <Navbar />
//       <section className="mx-auto max-w-4xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
//         <h1 className="font-serif text-4xl font-bold text-[color:var(--primary)]">Contact Us</h1>
//         <p className="mt-2 text-[color:var(--text-light)]">
//           Have questions about admissions, programs, or campus life? Send us a message.
//         </p>

//         <form
//           onSubmit={handleSubmit}
//           className="mt-8 space-y-4 rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] p-6 shadow-sm"
//         >
//           <div className="grid gap-4 md:grid-cols-2">
//             <div>
//               <label className="block text-sm font-semibold">Full Name</label>
//               <input
//                 required
//                 className="mt-1 w-full rounded-md border border-[var(--input)] bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ring)]"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold">Email</label>
//               <input
//                 type="email"
//                 required
//                 className="mt-1 w-full rounded-md border border-[var(--input)] bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ring)]"
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-semibold">Subject</label>
//             <input
//               required
//               className="mt-1 w-full rounded-md border border-[var(--input)] bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ring)]"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold">Message</label>
//             <textarea
//               required
//               rows={5}
//               className="mt-1 w-full rounded-md border border-[var(--input)] bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ring)]"
//             />
//           </div>
//           <button
//             type="submit"
//             className="rounded-full bg-[color:var(--secondary)] px-6 py-3 font-semibold text-[color:var(--secondary-foreground)] shadow-sm transition hover:bg-[color:var(--highlight)]"
//           >
//             Send Message
//           </button>
//           {status && <p className="text-[color:var(--primary)]">{status}</p>}
//         </form>
//       </section>
//       <Footer />
//     </main>
//   )
// }
