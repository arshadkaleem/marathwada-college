"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useState } from "react";

const quickLinks = [
  {
    title: "Academic Calendar",
    href: "#",
    description:
      "View important academic dates, holidays, and semester schedules",
    category: "Academic",
    color: "from-blue-500 to-blue-600",
    urgent: false,
  },
  {
    title: "Exam Timetable",
    href: "#",
    description: "Check your examination schedule and venue details",
    category: "Academic",
    color: "from-red-500 to-red-600",
    urgent: true,
  },
  // {
  //   title: "Results",
  //   href: "#",
  //   description: "Access your semester results and grade reports",
  //   category: "Academic",
  //   color: "from-green-500 to-green-600",
  //   urgent: false,
  // },
  // {
  //   title: "Library Portal",
  //   href: "#",
  //   description: "Search books, renew loans, and access digital resources",
  //   category: "Resources",
  //   color: "from-purple-500 to-purple-600",
  //   urgent: false,
  // },
  // {
  //   title: "Clubs & Activities",
  //   href: "#",
  //   description:
  //     "Explore student clubs and register for extracurricular activities",
  //   category: "Campus Life",
  //   color: "from-orange-500 to-orange-600",
  //   urgent: false,
  // },
  // {
  //   title: "Scholarships",
  //   href: "#",
  //   description: "Apply for scholarships and financial aid opportunities",
  //   category: "Financial",
  //   color: "from-teal-500 to-teal-600",
  //   urgent: false,
  // },
  // {
  //   title: "Fee Payment",
  //   href: "#",
  //   description: "Pay fees online and download payment receipts",
  //   category: "Financial",
  //   color: "from-indigo-500 to-indigo-600",
  //   urgent: true,
  // },
  // {
  //   title: "Attendance",
  //   href: "#",
  //   description: "View your attendance record and track progress",
  //   category: "Academic",
  //   color: "from-pink-500 to-pink-600",
  //   urgent: false,
  // },
  // {
  //   title: "Course Registration",
  //   href: "#",
  //   description: "Register for courses and view course schedules",
  //   category: "Academic",
  //   color: "from-cyan-500 to-cyan-600",
  //   urgent: false,
  // },
];

const announcements = [
  {
    title: "Mid-semester Exams Schedule Released",
    date: "October 15, 2025",
    type: "urgent",
    content:
      "Mid-semester examination schedule for all programs has been published. Check your exam timetable.",
  },
  {
    title: "New Library Books Available",
    date: "October 14, 2025",
    type: "info",
    content:
      "Latest engineering and technology books have been added to the library collection.",
  },
  {
    title: "Cultural Fest Registration Open",
    date: "October 12, 2025",
    type: "event",
    content:
      "Register now for the annual cultural festival. Multiple categories available for participation.",
  },
];

// const categories = ["All"];

export default function StudentCenterPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useState(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  });

  const filteredLinks =
    activeCategory === "All"
      ? quickLinks
      : quickLinks.filter((link) => link.category === activeCategory);

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
                Student Resources
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-[var(--secondary)] to-transparent rounded-full" />
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
                Student Center
              </span>
            </h1>

            <p className="text-xl text-[color:var(--text-light)] max-w-3xl mx-auto leading-relaxed">
              Your one-stop destination for all academic resources, campus
              services, and important information. Stay connected with
              everything you need for academic success.
            </p>
          </div>

          {/* Welcome Dashboard */}
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Left Column - Quick Links */}
            <div className="lg:col-span-3">
              {/* Category Filter */}
              {/* <div className="mb-12">
                <h2 className="font-serif text-3xl font-bold text-[color:var(--primary)] mb-8">
                  Quick Access
                </h2>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category, index) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                        activeCategory === category
                          ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg"
                          : "bg-[color:var(--surface)] border border-[var(--border)] text-[color:var(--text)] hover:border-[var(--secondary)] hover:text-[color:var(--secondary)]"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div> */}

              {/* Service Cards Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {filteredLinks.map((link, index) => (
                  <Link
                    key={`${link.title}-${activeCategory}`}
                    href={link.href}
                    className="group relative overflow-hidden rounded-3xl border border-[var(--secondary)]/20 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm p-6 shadow-lg transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:border-[var(--secondary)]/40"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Urgent Badge */}
                    {link.urgent && (
                      <div className="absolute top-4 right-4">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="relative z-10">
                      {/* Service Icon */}
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${link.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>

                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-gradient-to-r from-[var(--muted)]/50 to-[var(--muted)]/30 border border-[var(--border)]/30">
                        <span className="text-xs font-medium text-[color:var(--text-light)]">
                          {link.category}
                        </span>
                      </div>

                      {/* Service Title */}
                      <h3 className="font-serif text-xl font-bold text-[color:var(--primary)] mb-3 group-hover:text-[color:var(--secondary)] transition-colors duration-300 leading-tight">
                        {link.title}
                      </h3>

                      {/* Service Description */}
                      <p className="text-[color:var(--text-light)] leading-relaxed mb-4 group-hover:text-[color:var(--text)] transition-colors duration-300 text-sm">
                        {link.description}
                      </p>

                      {/* Access Arrow */}
                      <div className="flex items-center gap-2 text-[color:var(--secondary)] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                        <span className="text-sm font-semibold">
                          Access Now
                        </span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-tl from-[var(--primary)]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Announcements */}
              {/* <div className="sticky top-32 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-6 shadow-lg">
                <h3 className="font-serif text-xl font-bold text-[color:var(--primary)] mb-6">
                  Latest Announcements
                </h3>

                <div className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <div
                      key={index}
                      className="group p-4 rounded-2xl hover:bg-[var(--muted)]/30 transition-colors duration-300 border border-transparent hover:border-[var(--border)]/50"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            announcement.type === "urgent"
                              ? "bg-red-500 animate-pulse"
                              : announcement.type === "event"
                              ? "bg-[var(--secondary)]"
                              : "bg-[var(--highlight)]"
                          }`}
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-[color:var(--text)] text-sm leading-tight mb-1 group-hover:text-[color:var(--primary)] transition-colors duration-300">
                            {announcement.title}
                          </h4>
                          <p className="text-xs text-[color:var(--text-light)] mb-2">
                            {announcement.date}
                          </p>
                          <p className="text-xs text-[color:var(--text-light)] leading-relaxed">
                            {announcement.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[color:var(--secondary)] hover:text-[color:var(--highlight)] transition-colors duration-300"
                >
                  View All Announcements
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div> */}

              {/* Upcoming Events */}
              {/* <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-6 shadow-lg">
                <h3 className="font-serif text-lg font-bold text-[color:var(--primary)] mb-4">
                  Upcoming Events
                </h3>

                <div className="space-y-3">
                  {[
                    { name: "Mid-sem Exams", date: "Oct 20-25", type: "exam" },
                    { name: "Tech Symposium", date: "Nov 5", type: "event" },
                    {
                      name: "Sports Week",
                      date: "Nov 12-16",
                      type: "activity",
                    },
                  ].map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-[var(--border)]/30 last:border-b-0"
                    >
                      <div>
                        <p className="text-sm font-medium text-[color:var(--text)]">
                          {event.name}
                        </p>
                        <p className="text-xs text-[color:var(--text-light)]">
                          {event.date}
                        </p>
                      </div>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          event.type === "exam"
                            ? "bg-red-500"
                            : event.type === "event"
                            ? "bg-[var(--secondary)]"
                            : "bg-[var(--highlight)]"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Support */}
              <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-6 shadow-lg">
                <h3 className="font-serif text-lg font-bold text-[color:var(--primary)] mb-4">
                  Need Help?
                </h3>

                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="block p-3 rounded-xl bg-gradient-to-r from-[var(--muted)]/30 to-transparent hover:from-[var(--secondary)]/10 hover:to-[var(--highlight)]/5 transition-all duration-300 border border-transparent hover:border-[var(--border)]/50"
                  >
                    <div className="flex items-center gap-3">
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
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-[color:var(--text)]">
                          Technical Support
                        </p>
                        <p className="text-xs text-[color:var(--text-light)]">
                          Get help with portal issues
                        </p>
                      </div>
                    </div>
                  </Link>

                  <div className="p-3">
                    <div className="flex items-center gap-2 text-sm text-[color:var(--text-light)]">
                      <svg
                        className="w-4 h-4"
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
                      <span>+91 8275428401</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--muted)]/30 via-[var(--muted)]/50 to-[var(--muted)]/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[color:var(--primary)] mb-6">
            Make the Most of Your Academic Journey
          </h2>
          <p className="text-lg text-[color:var(--text-light)] mb-8 max-w-2xl mx-auto">
            Access all the resources you need for academic success. From course
            materials to career guidance, everything is just a click away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/courses"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 min-w-[200px]"
            >
              <span className="relative z-10">View Courses</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import Link from "next/link"

// export default function StudentCenterPage() {
//   const links = [
//     { title: "Academic Calendar", href: "#" },
//     { title: "Exam Timetable", href: "#" },
//     { title: "Results", href: "#" },
//     { title: "Library Portal", href: "#" },
//     { title: "Clubs & Activities", href: "#" },
//     { title: "Scholarships", href: "#" },
//   ]

//   return (
//     <main>
//       <Navbar />
//       <section className="mx-auto max-w-5xl px-4 pt-28 pb-14 sm:px-6 lg:px-8">
//         <h1 className="font-serif text-4xl font-bold text-[color:var(--primary)]">Student Center</h1>
//         <p className="mt-2 text-[color:var(--text-light)]">Quick links and resources for students.</p>

//         <div className="mt-8 grid gap-6 md:grid-cols-2">
//           {links.map((l) => (
//             <Link
//               key={l.title}
//               href={l.href}
//               className="rounded-xl border border-[var(--border)] bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//             >
//               <h3 className="font-serif text-xl font-bold text-[color:var(--primary)]">{l.title}</h3>
//               <p className="mt-1 text-[color:var(--text-light)]">Click to view details</p>
//             </Link>
//           ))}
//         </div>
//       </section>
//       <Footer />
//     </main>
//   )
// }
