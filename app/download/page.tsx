import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function DownloadPage() {
  const files = [
    {
      name: "Diploma Programs Brochure",
      size: "1.8 MB",
      href: "#",
      type: "PDF",
      description:
        "Detailed information about all diploma courses and their specializations.",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Degree Programs Brochure",
      size: "2.1 MB",
      href: "#",
      type: "PDF",
      description:
        "Complete guide to undergraduate degree programs and career opportunities.",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Application Form 2025",
      size: "0.5 MB",
      href: "#",
      type: "PDF",
      description: "Official application form for admission to MITM programs.",
      color: "from-purple-500 to-purple-600",
    },
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

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent rounded-full" />
              <span className="text-sm font-bold text-[color:var(--secondary)] uppercase tracking-[0.2em]">
                Resources & Downloads
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-[var(--secondary)] to-transparent rounded-full" />
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
                Downloads
              </span>
            </h1>

            <p className="text-xl text-[color:var(--text-light)] max-w-3xl mx-auto leading-relaxed">
              Access important brochures, forms, and documents to learn more
              about our programs and admission process. All files are available
              for immediate download.
            </p>
          </div>

          {/* Quick Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: `${files.length}`, label: "Documents Available" },
              { number: "PDF", label: "Format" },
              { number: "24/7", label: "Access" },
              { number: "Free", label: "Downloads" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-[color:var(--text-light)] font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Downloads Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">
              <span className="text-[color:var(--primary)]">Available </span>
              <span className="bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
                Documents
              </span>
            </h2>
            <p className="text-lg text-[color:var(--text-light)] max-w-2xl mx-auto">
              Download comprehensive information about our academic programs,
              admission process, and institutional facilities.
            </p>
          </div>

          {/* File Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {files.map((file, index) => (
              <div
                key={file.name}
                className="group relative overflow-hidden rounded-3xl border border-[var(--secondary)]/20 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm p-8 shadow-lg transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:border-[var(--secondary)]/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--secondary)]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card Content */}
                <div className="relative z-10">
                  {/* File Type Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${file.color} text-white shadow-lg`}
                    >
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="text-xs font-bold uppercase tracking-wider">
                        {file.type}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-[color:var(--text-light)]">
                      {file.size}
                    </div>
                  </div>

                  {/* File Name */}
                  <h3 className="font-serif text-xl font-bold text-[color:var(--primary)] mb-3 group-hover:text-[color:var(--secondary)] transition-colors duration-300 leading-tight">
                    {file.name}
                  </h3>

                  {/* File Description */}
                  <p className="text-[color:var(--text-light)] leading-relaxed mb-6 group-hover:text-[color:var(--text)] transition-colors duration-300">
                    {file.description}
                  </p>

                  {/* Download Button */}
                  <a
                    href={file.href}
                    className="group/btn relative w-full overflow-hidden inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--secondary)]/95 to-[var(--highlight)] px-6 py-3 font-semibold text-[color:var(--secondary-foreground)] shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[var(--secondary)]/25 hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5 relative z-10 transition-transform group-hover/btn:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="relative z-10">Download</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--highlight)] to-[var(--secondary)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-tl from-[var(--primary)]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--muted)]/30 via-[var(--muted)]/50 to-[var(--muted)]/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-[color:var(--primary)] mb-6">
              Need More Information?
            </h2>
            <p className="text-lg text-[color:var(--text-light)] max-w-3xl mx-auto mb-8">
              Our academic counselors are available to provide personalized
              guidance about our programs, admission requirements, and career
              opportunities.
            </p>
          </div>

          {/* <div className="grid gap-8 md:grid-cols-3 mb-12">
            {[
              {
                title: "Academic Counseling",
                description:
                  "Get personalized guidance on course selection and career planning",
                action: "Schedule a Call",
                href: "/contact",
              },
              {
                title: "Campus Visit",
                description:
                  "Experience our facilities and meet our faculty members in person",
                action: "Book a Tour",
                href: "/contact",
              },
              {
                title: "Online Information Session",
                description:
                  "Join our virtual sessions to learn about programs and ask questions",
                action: "Register Now",
                href: "/contact",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-[color:var(--surface)] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[var(--border)]/50"
              >
                <h3 className="font-serif text-xl font-bold text-[color:var(--primary)] mb-3">
                  {resource.title}
                </h3>
                <p className="text-[color:var(--text-light)] mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <a
                  href={resource.href}
                  className="inline-flex items-center gap-2 text-[color:var(--secondary)] font-semibold hover:text-[color:var(--highlight)] transition-colors duration-300"
                >
                  {resource.action}
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
                </a>
              </div>
            ))}
          </div> */}

          {/* Call-to-Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/courses"
                className="group relative overflow-hidden rounded-full border-2 border-[var(--primary)] bg-transparent px-8 py-4 font-semibold text-[color:var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:scale-105 hover:shadow-lg hover:-translate-y-1 min-w-[200px]"
              >
                View All Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Download Tips Section */}

      <Footer />
    </main>
  );
}

// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";

// export default function DownloadPage() {
//   const files = [
//     { name: "Institute Prospectus 2025", size: "2.4 MB", href: "#" },
//     { name: "Diploma Programs Brochure", size: "1.8 MB", href: "#" },
//     { name: "Degree Programs Brochure", size: "2.1 MB", href: "#" },
//   ];

//   return (
//     <main>
//       <Navbar />

//       <section className="mx-auto max-w-5xl px-4 pt-28 pb-14 sm:px-6 lg:px-8">
//         <h1 className="font-serif text-4xl font-bold text-[color:var(--primary)]">
//           Downloads
//         </h1>
//         <p className="mt-2 text-[color:var(--text-light)]">
//           Brochures, forms, and important documents.
//         </p>

//         <ul className="mt-8 divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[color:var(--surface)]">
//           {files.map((f) => (
//             <li key={f.name} className="flex items-center justify-between p-5">
//               <div>
//                 <p className="font-semibold">{f.name}</p>
//                 <p className="text-sm text-[color:var(--text-light)]">
//                   {f.size}
//                 </p>
//               </div>
//               <a
//                 href={f.href}
//                 className="rounded-full bg-[color:var(--secondary)] px-4 py-2 font-semibold text-[color:var(--secondary-foreground)] hover:bg-[color:var(--highlight)]"
//               >
//                 Download
//               </a>
//             </li>
//           ))}
//         </ul>
//       </section>
//       <Footer />
//     </main>
//   );
// }
