import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { courses } from "@/lib/courses";

export default function CoursesPage() {
  const diploma = courses.filter((c) => c.category === "Diploma");
  const degree = courses.filter((c) => c.category === "Degree");

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
                Academic Programs
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-[var(--secondary)] to-transparent rounded-full" />
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
                Our Courses
              </span>
            </h1>

            <p className="text-xl text-[color:var(--text-light)] max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive Diploma and Degree programs designed
              to prepare you for industry success. Each program combines
              theoretical knowledge with practical skills for real-world
              applications.
            </p>
          </div>

          {/* Quick Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              {
                number: `${diploma.length + degree.length}+`,
                label: "Total Programs",
              },
              { number: "95%", label: "Placement Rate" },
              { number: "2-4", label: "Years Duration" },
              { number: "50+", label: "Industry Partners" },
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

      {/* Courses Content */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Diploma Courses Section */}
          <div id="diploma" className="mb-20">
            {/* Section Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                  <span className="text-sm font-semibold text-[color:var(--primary)] uppercase tracking-wider">
                    Professional Diplomas
                  </span>
                </div>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-[color:var(--primary)]">Diploma </span>
                <span className="bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
                  Courses
                </span>
              </h2>

              <p className="text-lg text-[color:var(--text-light)] max-w-3xl">
                Specialized diploma programs designed to provide in-depth
                knowledge and practical skills for immediate industry
                application.
              </p>
            </div>

            {/* Diploma Cards Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {diploma.map((course, index) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="group relative overflow-hidden rounded-3xl border border-[var(--secondary)]/20 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm p-8 shadow-lg transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:border-[var(--secondary)]/40"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--secondary)]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Card Content */}
                  <div className="relative z-10">
                    {/* Course Category Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-gradient-to-r from-[var(--primary)]/15 to-[var(--secondary)]/10 border border-[var(--primary)]/25">
                      <span className="text-xs font-bold text-[color:var(--primary)] uppercase tracking-wider">
                        {course.category}
                      </span>
                    </div>

                    {/* Course Title */}
                    <h3 className="font-serif text-2xl font-bold text-[color:var(--primary)] mb-3 group-hover:text-[color:var(--secondary)] transition-colors duration-300 leading-tight">
                      {course.title}
                    </h3>

                    {/* Duration */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--highlight)]" />
                      <span className="text-sm font-medium text-[color:var(--highlight)]">
                        {course.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[color:var(--text)] leading-relaxed mb-6 group-hover:text-[color:var(--text)]/90 transition-colors duration-300">
                      {course.description}
                    </p>

                    {/* Learn More Arrow */}
                    <div className="flex items-center gap-2 text-[color:var(--secondary)] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                      <span className="text-sm font-semibold">Learn More</span>
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
                  <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-tl from-[var(--primary)]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </Link>
              ))}
            </div>
          </div>

          {/* Degree Courses Section */}
          <div id="degree">
            {/* Section Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--secondary)]/10 to-[var(--highlight)]/10 border border-[var(--secondary)]/20">
                  <div className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
                  <span className="text-sm font-semibold text-[color:var(--secondary)] uppercase tracking-wider">
                    Undergraduate Degrees
                  </span>
                </div>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-[color:var(--primary)]">Degree </span>
                <span className="bg-gradient-to-r from-[var(--highlight)] to-[var(--secondary)] bg-clip-text text-transparent">
                  Programs
                </span>
              </h2>

              <p className="text-lg text-[color:var(--text-light)] max-w-3xl">
                Comprehensive undergraduate degree programs that provide a
                strong foundation in engineering principles and prepare students
                for leadership roles in their chosen fields.
              </p>
            </div>

            {/* Degree Cards Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {degree.map((course, index) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="group relative overflow-hidden rounded-3xl border border-[var(--secondary)]/20 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm p-8 shadow-lg transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:border-[var(--secondary)]/40"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/5 via-transparent to-[var(--highlight)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--highlight)]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Card Content */}
                  <div className="relative z-10">
                    {/* Course Category Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-gradient-to-r from-[var(--secondary)]/15 to-[var(--highlight)]/10 border border-[var(--secondary)]/25">
                      <span className="text-xs font-bold text-[color:var(--secondary)] uppercase tracking-wider">
                        {course.category}
                      </span>
                    </div>

                    {/* Course Title */}
                    <h3 className="font-serif text-2xl font-bold text-[color:var(--primary)] mb-3 group-hover:text-[color:var(--highlight)] transition-colors duration-300 leading-tight">
                      {course.title}
                    </h3>

                    {/* Duration */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                      <span className="text-sm font-medium text-[color:var(--secondary)]">
                        {course.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[color:var(--text)] leading-relaxed mb-6 group-hover:text-[color:var(--text)]/90 transition-colors duration-300">
                      {course.description}
                    </p>

                    {/* Learn More Arrow */}
                    <div className="flex items-center gap-2 text-[color:var(--highlight)] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                      <span className="text-sm font-semibold">Learn More</span>
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
                  <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-[var(--secondary)]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--muted)]/30 via-[var(--muted)]/50 to-[var(--muted)]/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[color:var(--primary)] mb-6">
            Need Help Choosing the Right Program?
          </h2>
          <p className="text-lg text-[color:var(--text-light)] mb-8 max-w-2xl mx-auto">
            Our academic counselors are here to help you select the program that
            best fits your career goals and interests. Get personalized guidance
            on course selection, admission requirements, and career
            opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 min-w-[200px]"
            >
              <span className="relative z-10">Get Counseling</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Industry Exposure",
                description: "Regular industrial visits and guest lectures",
              },
              {
                title: "Placement Support",
                description: "Dedicated placement cell with good success rate",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[color:var(--surface)]/80 backdrop-blur-sm border border-[var(--border)]/50"
              >
                <h3 className="font-semibold text-[color:var(--primary)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[color:var(--text-light)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// import Link from "next/link"
// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import { courses } from "@/lib/courses"

// export default function CoursesPage() {
//   const diploma = courses.filter((c) => c.category === "Diploma")
//   const degree = courses.filter((c) => c.category === "Degree")

//   return (
//     <main>
//       <Navbar />
//       <section className="mx-auto max-w-7xl px-4 pt-28 pb-14 sm:px-6 lg:px-8">
//         <h1 className="font-serif text-4xl font-bold text-[color:var(--primary)]">Courses</h1>
//         <p className="mt-2 text-[color:var(--text-light)]">Choose from our Diploma and Degree programs.</p>

//         <div id="diploma" className="mt-10">
//           <h2 className="font-serif text-2xl font-bold text-[color:var(--primary)]">Diploma Courses</h2>
//           <div className="mt-6 grid gap-6 md:grid-cols-2">
//             {diploma.map((c) => (
//               <Link
//                 key={c.slug}
//                 href={`/courses/${c.slug}`}
//                 className="group rounded-2xl border border-[var(--secondary)]/25 bg-[color:var(--surface)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
//               >
//                 <h3 className="font-serif text-xl font-bold text-[color:var(--primary)] group-hover:text-[color:var(--primary-light)]">
//                   {c.title}
//                 </h3>
//                 <p className="mt-1 text-sm text-[color:var(--text-light)]">{c.duration}</p>
//                 <p className="mt-3 text-[color:var(--text)]">{c.description}</p>
//               </Link>
//             ))}
//           </div>
//         </div>

//         <div id="degree" className="mt-12">
//           <h2 className="font-serif text-2xl font-bold text-[color:var(--primary)]">Degree</h2>
//           <div className="mt-6 grid gap-6 md:grid-cols-2">
//             {degree.map((c) => (
//               <Link
//                 key={c.slug}
//                 href={`/courses/${c.slug}`}
//                 className="group rounded-2xl border border-[var(--secondary)]/25 bg-[color:var(--surface)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
//               >
//                 <h3 className="font-serif text-xl font-bold text-[color:var(--primary)] group-hover:text-[color:var(--primary-light)]">
//                   {c.title}
//                 </h3>
//                 <p className="mt-1 text-sm text-[color:var(--text-light)]">{c.duration}</p>
//                 <p className="mt-3 text-[color:var(--text)]">{c.description}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </main>
//   )
// }
