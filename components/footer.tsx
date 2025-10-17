"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[color:var(--surface)] overflow-hidden">
      {/* Subtle Background Decorative Elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-[var(--secondary)]/4 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[var(--highlight)]/3 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.3)_1px,transparent_0)] bg-[size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Institution Info - Enhanced */}
          <div className="space-y-6">
            {/* Logo and Title */}
            <div className="group flex items-center gap-4">
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/90 to-[var(--primary)]/80 text-white grid place-items-center font-bold text-lg shadow-lg group-hover:shadow-xl group-hover:shadow-[var(--primary)]/25 transition-all duration-300">
                  MIT
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/60 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                  MITM, Umari
                </h4>
                <p className="text-xs text-[color:var(--text-light)] font-medium">
                  Excellence in Education
                </p>
              </div>
            </div>

            {/* Contact Information with Icons */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 mt-1">
                  <div className="p-2 rounded-lg bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/15 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-[var(--primary)]"
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
                <p className="text-sm text-[color:var(--text-light)] leading-relaxed group-hover:text-[color:var(--text)] transition-colors duration-300">
                  MARATHWADA INSTITUTE OF TECHNOLOGY AND MANAGEMENT,
                  <br />
                  Umari, Dist. Nanded - 431807
                </p>
              </div>

              {/* <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="p-2 rounded-lg bg-[var(--secondary)]/10 group-hover:bg-[var(--secondary)]/15 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-[var(--secondary)]"
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
                <a
                  href="mailto:info@mitm.ac.in"
                  className="text-sm text-[color:var(--text-light)] hover:text-[var(--secondary)] transition-colors duration-300 font-medium"
                >
                  info@mitm.ac.in
                </a>
              </div> */}

              <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="p-2 rounded-lg bg-[var(--highlight)]/10 group-hover:bg-[var(--highlight)]/15 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-[var(--highlight)]"
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
                <a
                  href="tel:+918275428401"
                  className="text-sm text-[color:var(--text-light)] hover:text-[var(--highlight)] transition-colors duration-300 font-medium"
                >
                  +91 8275428401
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-[color:var(--text)] flex items-center gap-2">
                <span className="w-4 h-0.5 bg-[var(--secondary)] rounded-full"></span>
                Follow Us
              </p>
              <div className="flex gap-3">
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
                    className="group relative p-3 rounded-xl bg-gradient-to-br from-[var(--muted)]/50 to-[var(--muted)]/30 border border-[var(--border)]/50 hover:border-[var(--secondary)]/40 hover:bg-gradient-to-br hover:from-[var(--secondary)]/10 hover:to-[var(--highlight)]/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <svg
                      className="w-4 h-4 text-[color:var(--text-light)] group-hover:text-[var(--secondary)] transition-colors duration-300"
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

          {/* Quick Links - Enhanced */}
          <div className="space-y-6">
            <h5 className="font-serif text-lg font-bold text-[color:var(--primary)] relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full"></div>
            </h5>

            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Courses", href: "/courses" },
                { label: "Gallery", href: "/gallery" },
                { label: "Student Center", href: "/student-center" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li
                  key={link.href}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Link
                    className="group flex items-center gap-3 text-[color:var(--text-light)] hover:text-[color:var(--primary)] transition-all duration-300 hover:translate-x-2 py-1"
                    href={link.href}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--border)] group-hover:bg-[var(--secondary)] group-hover:scale-125 transition-all duration-300"></div>
                    <span className="font-medium">{link.label}</span>
                    <svg
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Additional Links */}
            {/* <div className="pt-6 border-t border-[var(--border)]/50 space-y-3">
              <p className="text-xs font-semibold text-[color:var(--text-light)] uppercase tracking-wider">
                Legal
              </p>
              <div className="flex flex-col gap-2">
                {["Privacy Policy", "Terms of Service"].map((item, index) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-xs text-[color:var(--text-light)] hover:text-[color:var(--secondary)] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div> */}
          </div>

          {/* Admissions & CTA - Enhanced */}
          <div className="space-y-6">
            <h5 className="font-serif text-lg font-bold text-[color:var(--primary)] relative">
              Admissions
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full"></div>
            </h5>

            <div className="space-y-4">
              <p className="text-sm text-[color:var(--text-light)] leading-relaxed">
                Explore our comprehensive diploma and degree programs designed
                for industry success.
              </p>

              {/* <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse"></div>
                <span className="font-medium text-[color:var(--secondary)]">
                  Scholarships Available
                </span>
              </div> */}

              {/* <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-[var(--highlight)] animate-pulse delay-500"></div>
                <span className="font-medium text-[color:var(--highlight)]">
                  Career Support Included
                </span>
              </div> */}
            </div>

            {/* Enhanced CTA Button */}
            <Link
              href="/courses"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--secondary)]/95 to-[var(--highlight)] px-8 py-4 font-semibold text-[color:var(--secondary-foreground)] shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[var(--secondary)]/25 hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">Apply Now</span>
              <svg
                className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1"
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
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--highlight)] to-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            {/* Quick Stats */}
              {/* <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[var(--border)]/50">
                {[
                  {
                    number: "95%",
                    label: "Placement Rate",
                    color: "var(--secondary)",
                  },
                  {
                    number: "15+",
                    label: "Years Experience",
                    color: "var(--highlight)",
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className="text-2xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        color: `var(--${
                          stat.color.includes("secondary")
                            ? "secondary"
                            : "highlight"
                        })`,
                      }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-xs text-[color:var(--text-light)] font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div> */}
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Copyright Section */}
      <div className="relative border-t border-[var(--border)] bg-gradient-to-r from-[var(--muted)]/30 via-[var(--surface)] to-[var(--muted)]/30">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-xs text-[color:var(--text-light)] flex items-center gap-2">
                <span className="hidden sm:inline">©</span>
                <span>{new Date().getFullYear()}</span>
                <span className="w-1 h-1 rounded-full bg-[var(--border)]"></span>
                <span className="font-medium">
                  MARATHWADA INSTITUTE OF TECHNOLOGY AND MANAGEMENT, Umari
                </span>
              </p>
              <p className="text-xs text-[color:var(--text-light)]/70 mt-1">
                All rights reserved.
              </p>
            </div>

            {/* <div className="flex items-center gap-2">
              <span className="text-xs text-[color:var(--text-light)]/70">
                Made with
              </span>
              <div className="w-3 h-3 bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] rounded-full animate-pulse"></div>
              <span className="text-xs text-[color:var(--text-light)]/70">
                for students
              </span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 group p-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg hover:shadow-xl hover:shadow-[var(--primary)]/25 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
      >
        <svg
          className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}

// import Link from "next/link"

// export function Footer() {
//   return (
//     <footer className="border-t border-[var(--border)] bg-[color:var(--surface)]">
//       <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3">
//         <div>
//           <h4 className="font-serif text-xl font-bold text-[color:var(--primary)]">MITM, Umari</h4>
//           <p className="mt-2 text-sm text-[color:var(--text-light)]">
//             MARATHWADA INSTITUTE OF TECHNOLOGY AND MANAGEMENT, Umari, Dist. Nanded - 431807
//           </p>
//           <p className="mt-2 text-sm text-[color:var(--text-light)]">Email: info@mitm.ac.in</p>
//           <p className="text-sm text-[color:var(--text-light)]">Phone: +91 00000 00000</p>
//         </div>
//         <div>
//           <h5 className="font-semibold text-[color:var(--text)]">Quick Links</h5>
//           <ul className="mt-3 space-y-2">
//             <li>
//               <Link className="hover:text-[color:var(--primary)] transition-colors" href="/about">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link className="hover:text-[color:var(--primary)] transition-colors" href="/courses">
//                 Courses
//               </Link>
//             </li>
//             <li>
//               <Link className="hover:text-[color:var(--primary)] transition-colors" href="/gallery">
//                 Gallery
//               </Link>
//             </li>
//             <li>
//               <Link className="hover:text-[color:var(--primary)] transition-colors" href="/contact">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h5 className="font-semibold text-[color:var(--text)]">Admissions</h5>
//           <p className="mt-3 text-sm text-[color:var(--text-light)]">
//             Explore our diploma and degree programs. Scholarships and career support available.
//           </p>
//           <Link
//             href="/contact"
//             className="mt-4 inline-block rounded-full bg-[color:var(--secondary)] px-4 py-2 text-[color:var(--secondary-foreground)] font-semibold shadow-sm hover:bg-[color:var(--highlight)]"
//           >
//             Apply Now
//           </Link>
//         </div>
//       </div>
//       <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[color:var(--text-light)]">
//         © {new Date().getFullYear()} MARATHWADA INSTITUTE OF TECHNOLOGY AND MANAGEMENT, Umari. All rights reserved.
//       </div>
//     </footer>
//   )
// }
