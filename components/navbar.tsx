"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/download", label: "Download" },
  { href: "/gallery", label: "Gallery" },
  { href: "/student-center", label: "Student Center" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--secondary)]/10 bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-2xl shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Enhanced Logo Section */}
          <Link
            href="/"
            className="group flex items-center gap-4 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/90 to-[var(--primary)]/80 text-white grid place-items-center font-bold text-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[var(--primary)]/25">
                MIT
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-20 blur-md"></div>
            </div>
            <div className="leading-tight">
              <p className="font-serif font-bold text-[color:var(--primary)] text-xl tracking-tight">
                Marathwada Institute
              </p>
              <p className="text-sm text-[color:var(--text-light)] font-medium">
                of Technology & Management
              </p>
            </div>
          </Link>

          {/* Enhanced Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden relative inline-flex items-center justify-center rounded-xl border border-[var(--border)]/50 p-3 text-[color:var(--text)] hover:bg-gradient-to-br hover:from-[var(--muted)] hover:to-[var(--muted)]/50 transition-all duration-300 hover:scale-105 hover:shadow-md group"
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  "h-6 w-6 transition-all duration-300",
                  open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                )}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  "absolute inset-0 h-6 w-6 transition-all duration-300",
                  open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                )}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </button>

          {/* Enhanced Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative group text-sm font-medium text-[color:var(--text)] hover:text-[color:var(--primary)] transition-all duration-300",
                    "before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-[var(--primary)] before:to-[var(--secondary)] before:transition-all before:duration-300 before:rounded-full",
                    "hover:before:w-full hover:transform hover:-translate-y-0.5"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10 px-1 py-2">{item.label}</span>
                </Link>
              </li>
            ))}
            <li>
              {/* <Link
                href="/contact"
                className="relative group overflow-hidden rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--secondary)]/95 to-[var(--highlight)] px-6 py-3 text-[color:var(--secondary-foreground)] font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[var(--secondary)]/25 hover:scale-105 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--highlight)] to-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link> */}
            </li>
          </ul>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-out",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="pb-6 pt-4">
            <div className="rounded-2xl bg-gradient-to-br from-white/80 via-[var(--surface)]/50 to-white/60 backdrop-blur-sm border border-[var(--border)]/30 shadow-xl p-4">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center rounded-xl px-4 py-3 text-[color:var(--text)] hover:text-[color:var(--primary)] hover:bg-gradient-to-r hover:from-[var(--muted)]/50 hover:to-transparent transition-all duration-300"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <span className="font-medium">{item.label}</span>
                      <svg
                        className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
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
              {/* <div className="mt-4 pt-4 border-t border-[var(--border)]/30">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] px-6 py-3 text-center text-[color:var(--secondary-foreground)] font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-102 inline-block"
                >
                  <span className="relative z-10">Apply Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--highlight)] to-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

// "use client"

// import Link from "next/link"
// import { useState } from "react"
// import { cn } from "@/lib/utils"

// const navItems = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About Us" },
//   { href: "/courses", label: "Courses" },
//   { href: "/download", label: "Download" },
//   { href: "/gallery", label: "Gallery" },
//   { href: "/student-center", label: "Student Center" },
//   { href: "/contact", label: "Contact" },
// ]

// export function Navbar() {
//   const [open, setOpen] = useState(false)

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--secondary)]/20 bg-[color:var(--surface)]/80 backdrop-blur-xl shadow-sm">
//       <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           <Link href="/" className="flex items-center gap-3">
//             <div className="h-9 w-9 rounded-lg bg-[var(--primary)] text-white grid place-items-center font-bold">
//               MIT
//             </div>
//             <div className="leading-tight">
//               <p className="font-serif font-bold text-[color:var(--primary)] text-lg">Marathwada Institute</p>
//               <p className="text-xs text-[color:var(--text-light)]">of Technology & Management</p>
//             </div>
//           </Link>

//           <button
//             aria-label="Toggle menu"
//             onClick={() => setOpen(!open)}
//             className="md:hidden inline-flex items-center justify-center rounded-md border border-[var(--border)] p-2 text-[color:var(--text)] hover:bg-[var(--muted)] transition"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               aria-hidden="true"
//             >
//               <line x1="3" y1="6" x2="21" y2="6" />
//               <line x1="3" y1="12" x2="21" y2="12" />
//               <line x1="3" y1="18" x2="21" y2="18" />
//             </svg>
//             <span className="sr-only">Open menu</span>
//           </button>

//           <ul className="hidden md:flex items-center gap-6">
//             {navItems.map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className={cn(
//                     "nav-underline text-sm font-medium text-[color:var(--text)] hover:text-[color:var(--primary)] transition-colors",
//                   )}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//             <li>
//               <Link
//                 href="/contact"
//                 className="rounded-full bg-[color:var(--secondary)] px-4 py-2 text-[color:var(--secondary-foreground)] font-semibold shadow-sm hover:bg-[color:var(--highlight)] transition-colors"
//               >
//                 Apply Now
//               </Link>
//             </li>
//           </ul>
//         </div>
//         {open && (
//           <ul className="md:hidden pb-4 animate-fadeIn">
//             {navItems.map((item) => (
//               <li key={item.href} className="border-t border-[var(--border)]">
//                 <Link
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                   className="block py-3 text-[color:var(--text)] hover:text-[color:var(--primary)]"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//             <li className="border-t border-[var(--border)] pt-3">
//               <Link
//                 href="/contact"
//                 onClick={() => setOpen(false)}
//                 className="inline-block rounded-full bg-[color:var(--secondary)] px-4 py-2 text-[color:var(--secondary-foreground)] font-semibold shadow-sm hover:bg-[color:var(--highlight)]"
//               >
//                 Apply Now
//               </Link>
//             </li>
//           </ul>
//         )}
//       </nav>
//     </header>
//   )
// }
