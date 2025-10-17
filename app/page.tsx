"use client";
import { Navbar } from "@/components/navbar";

import { HeroCarousel } from "@/components/hero-carousel";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroCarousel />

      {/* Enhanced Highlights Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[var(--primary)]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--secondary)]/5 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[var(--secondary)] rounded-full" />
            <span className="text-sm font-semibold text-[color:var(--secondary)] uppercase tracking-wider">
              Why Choose MIT&M
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[var(--secondary)] rounded-full" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[color:var(--primary)] mb-6 leading-tight">
            Marathwada Institute of
            <br />
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
              Technology & Management
            </span>
          </h2>

          <p className="text-lg text-[color:var(--text-light)] max-w-3xl mx-auto leading-relaxed">
            Discover comprehensive degree programs, PG courses, and specialized
            programs with modern learning approaches. Our streamlined admission
            process, industry-focused placements, and state-of-the-art
            facilities create the perfect environment for academic and
            professional growth.
          </p>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {[
            {
              title: "Comprehensive Programs",
              desc: "Degree programs, PG courses, and specialized certifications designed for industry readiness.",
              gradient: "from-blue-500/10 to-purple-500/10",
            },
            {
              title: "Experienced Faculty",
              desc: "Learn from qualified educators with strong industry exposure and professional experience.",
              gradient: "from-green-500/10 to-teal-500/10",
            },
            {
              title: "Modern Infrastructure",
              desc: "Advanced labs and learning spaces designed for hands-on education and practical experience.",
              gradient: "from-orange-500/10 to-red-500/10",
            },
            {
              title: "Career Support",
              desc: "Comprehensive placement assistance and industry partnerships to boost career outcomes.",
              gradient: "from-purple-500/10 to-pink-500/10",
            },
            {
              title: "Online Applications",
              desc: "Streamlined online admission process making it easy to apply and track your application status.",
              gradient: "from-cyan-500/10 to-blue-500/10",
            },
            {
              title: "Multiple Centers",
              desc: "Learning centers strategically located for convenient access to quality education nationwide.",
              gradient: "from-indigo-500/10 to-purple-500/10",
            },
          ].map((card, index) => (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-3xl border border-[var(--secondary)]/20 bg-[color:var(--surface)] p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:border-[var(--secondary)]/40 ${
                index >= 3 ? "md:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Card Content */}
              <div className="relative z-10">
                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[color:var(--primary)] mb-4 group-hover:text-[color:var(--secondary)] transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[color:var(--text-light)] leading-relaxed group-hover:text-[color:var(--text)] transition-colors duration-300">
                  {card.desc}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <svg
                    className="w-6 h-6 text-[color:var(--secondary)]"
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
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[var(--secondary)]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl from-[var(--primary)]/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-gradient-to-r from-[var(--surface)] via-[var(--muted)]/30 to-[var(--surface)] rounded-3xl border border-[var(--secondary)]/20 p-8 sm:p-12">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[color:var(--primary)] mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-[color:var(--text-light)] mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who have built their careers
            with our comprehensive education programs and industry partnerships.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/courses"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 min-w-[200px]"
            >
              <span className="relative z-10">Explore Programs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* <a
              href="/contact"
              className="group relative overflow-hidden rounded-full border-2 border-[var(--primary)] bg-transparent px-8 py-4 font-semibold text-[color:var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:scale-105 hover:shadow-lg hover:-translate-y-1 min-w-[200px]"
            >
              Apply Online Now
            </a> */}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "15+", label: "Years of Excellence" },
            { number: "5000+", label: "Successful Graduates" },
            { number: "50+", label: "Industry Partners" },
            { number: "95%", label: "Placement Rate" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-[color:var(--text-light)] font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </section>

      {/* Courses Preview */}
      <section className="relative bg-gradient-to-br from-[var(--muted)]/50 via-[var(--muted)] to-[var(--muted)]/80 py-16 sm:py-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-40 sm:w-64 h-40 sm:h-64 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-52 sm:w-80 h-52 sm:h-80 bg-gradient-to-tl from-[var(--secondary)]/8 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-[var(--highlight)]/5 to-transparent rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.5)_1px,transparent_0)] bg-[size:40px_40px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Enhanced Section Header */}
          <div className="mb-12 sm:mb-16 text-center">
            {/* Top Accent Line */}
            <div className="inline-flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <div className="hidden sm:block w-16 h-0.5 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent rounded-full" />
              <span className="text-xs sm:text-sm font-bold text-[color:var(--secondary)] uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                Academic Excellence
              </span>
              <div className="hidden sm:block w-16 h-0.5 bg-gradient-to-l from-transparent via-[var(--secondary)] to-transparent rounded-full" />
            </div>

            {/* Main Title */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-[color:var(--primary)]">Our </span>
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
                Programs
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[color:var(--text-light)] max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Diploma and Degree courses designed for real-world success and
              industry leadership.
              <br className="hidden sm:block" />
              <span className="block sm:inline font-medium text-[color:var(--primary)] mt-2 sm:mt-0">
                Shape your future with our comprehensive academic offerings.
              </span>
            </p>
          </div>

          {/* Program Cards Grid */}
          <div className="grid gap-8 lg:gap-12 md:grid-cols-2 items-stretch">
            {/* Diploma Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-[var(--border)]/30 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm p-6 sm:p-10 shadow-xl transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:border-[var(--secondary)]/40">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-[var(--secondary)]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-[color:var(--primary)] uppercase tracking-wider">
                    Professional Diplomas
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-3xl font-bold text-[color:var(--primary)] mb-4 sm:mb-6 group-hover:text-[color:var(--secondary)] transition-colors duration-300">
                  Diploma Courses
                </h3>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    "Advance Diploma in Industrial Safety (ADIS) — 02 Year",
                    "PG Diploma in Production Management — 02 Year",
                    "PG Diploma in Environmental Engineering — 02 Year",
                    "PG Diploma in Industrial Safety (ADIS) — 02 Year",
                  ].map((course, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 group/item"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 mt-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] group-hover/item:scale-125 transition-transform duration-300" />
                      </div>
                      <span className="text-sm sm:text-base text-[color:var(--text)] leading-relaxed group-hover:text-[color:var(--primary)] transition-colors duration-300">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  className="group/btn relative overflow-hidden inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--secondary)]/95 to-[var(--highlight)] px-6 sm:px-8 py-3 sm:py-4 font-semibold text-[color:var(--secondary-foreground)] shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[var(--secondary)]/25 hover:scale-105 hover:-translate-y-1"
                  href="/courses#diploma"
                >
                  <span className="relative z-10 text-sm sm:text-base">
                    View Diploma Programs
                  </span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform group-hover/btn:translate-x-1"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--highlight)] to-[var(--secondary)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>

              {/* Floating Decorative Element */}
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-gradient-to-tl from-[var(--primary)]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Degree Courses Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-[var(--border)]/30 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm p-8 sm:p-10 shadow-xl transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:border-[var(--secondary)]/40">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/5 via-transparent to-[var(--highlight)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--highlight)]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--secondary)]/10 to-[var(--highlight)]/10 border border-[var(--secondary)]/20">
                  <div className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
                  <span className="text-sm font-semibold text-[color:var(--secondary)] uppercase tracking-wider">
                    Undergraduate Degrees
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[color:var(--primary)] mb-6 group-hover:text-[color:var(--highlight)] transition-colors duration-300">
                  Degree Programs
                </h3>

                <div className="space-y-4 mb-8">
                  {[
                    "B.E. in Computer Science — 4 Years",
                    "B.E. in Production Engineering — 4 Years",
                  ].map((course, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 group/item"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 mt-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--highlight)] to-[var(--secondary)] group-hover/item:scale-125 transition-transform duration-300" />
                      </div>
                      <span className="text-[color:var(--text)] leading-relaxed group-hover:text-[color:var(--primary)] transition-colors duration-300">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  className="group/btn relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--highlight)] via-[var(--highlight)]/95 to-[var(--secondary)] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[var(--highlight)]/25 hover:scale-105 hover:-translate-y-1"
                  href="/courses#degree"
                >
                  <span className="relative z-10">View Degree Programs</span>
                  <svg
                    className="w-5 h-5 relative z-10 transition-transform group-hover/btn:translate-x-1"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>

              {/* Floating Decorative Element */}
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-[var(--secondary)]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 px-6 sm:px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--surface)]/80 via-[var(--muted)]/50 to-[var(--surface)]/80 backdrop-blur-sm border border-[var(--border)]/30 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] animate-pulse" />
                <span className="text-sm font-medium text-[color:var(--text-light)]">
                  Industry-Aligned Curriculum
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-[var(--border)]" />
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] animate-pulse delay-500" />
                <span className="text-sm font-medium text-[color:var(--text-light)]">
                  Placement Assistance
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-[var(--border)]" />
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--highlight)] to-[var(--primary)] animate-pulse delay-1000" />
                <span className="text-sm font-medium text-[color:var(--text-light)]">
                  Expert Faculty
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-[var(--primary)]/8 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-[var(--secondary)]/6 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[var(--highlight)]/5 to-transparent rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.4)_1px,transparent_0)] bg-[size:60px_60px]" />

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent rounded-full" />
            <span className="text-sm font-bold text-[color:var(--secondary)] uppercase tracking-[0.2em]">
              Success Stories
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-[var(--secondary)] to-transparent rounded-full" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-[color:var(--primary)]">What Our </span>
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[color:var(--text-light)] max-w-3xl mx-auto leading-relaxed">
            Discover how MIT&M has transformed careers and shaped futures
            through
            <br />
            <span className="font-medium text-[color:var(--primary)]">
              excellence in education and industry connections.
            </span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {[
            {
              name: "Priya Sharma",
              role: "Software Engineer at TCS",
              program: "B.E. Computer Science '23",
              content:
                "MIT&M's practical approach to learning gave me the confidence to tackle real-world challenges. The faculty's industry experience and modern labs prepared me perfectly for my career in software development.",
              rating: 5,
              image: "/student-1.jpg",
              company: "TCS",
            },
            {
              name: "Rohit Patil",
              role: "Production Manager",
              program: "B.E. Production Engineering '22",
              content:
                "The hands-on experience I gained through MIT&M's advanced workshops and industry partnerships directly contributed to landing my dream job. The placement support team was exceptional throughout the process.",
              rating: 5,
              image: "/student-2.jpg",
              company: "Mahindra",
            },
            // {
            //   name: "Sneha Desai",
            //   role: "Safety Officer at L&T",
            //   program: "ADIS Graduate '24",
            //   content:
            //     "The Advanced Diploma in Industrial Safety program at MIT&M opened doors I never imagined. The comprehensive curriculum and expert faculty made complex safety protocols easy to understand and implement.",
            //   rating: 5,
            //   image: "/student-3.jpg",
            //   company: "L&T",
            // },
            {
              name: "Arjun Jadhav",
              role: "Project Coordinator",
              program: "PG Diploma Production Management '23",
              content:
                "MIT&M's focus on practical knowledge and industry exposure helped me transition from engineering to management seamlessly. The networking opportunities were invaluable for my career growth.",
              rating: 5,
              image: "/student-4.jpg",
              company: "Bajaj Auto",
            },
            // {
            //   name: "Pooja Kulkarni",
            //   role: "Environmental Consultant",
            //   program: "PG Diploma Environmental Engineering '22",
            //   content:
            //     "The environmental engineering program at MIT&M is comprehensive and current with industry standards. My professors were mentors who guided me beyond academics into professional excellence.",
            //   rating: 5,
            //   image: "/student-5.jpg",
            //   company: "AECOM",
            // },
            // {
            //   name: "Vikram Chavan",
            //   role: "Technical Lead",
            //   program: "B.E. Computer Science '21",
            //   content:
            //     "Four years at MIT&M shaped not just my technical skills but also my leadership abilities. The collaborative environment and innovative projects prepared me to lead teams in the tech industry.",
            //   rating: 5,
            //   image: "/student-6.jpg",
            //   company: "Infosys",
            // },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm border border-[var(--border)]/30 p-8 shadow-xl transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:border-[var(--secondary)]/40"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/3 via-transparent to-[var(--secondary)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Floating Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <svg
                  className="w-12 h-12 text-[color:var(--primary)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Student Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center overflow-hidden">
                      <span className="text-2xl font-bold text-[color:var(--primary)]">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    {/* Company Badge */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-[color:var(--primary)] text-lg group-hover:text-[color:var(--secondary)] transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[color:var(--text-light)] mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-xs font-medium text-[color:var(--secondary)]">
                      {testimonial.program}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[color:var(--secondary)] group-hover:scale-110 transition-transform duration-300"
                      style={{ animationDelay: `${i * 0.1}s` }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-[color:var(--text)] leading-relaxed mb-6 group-hover:text-[color:var(--text)]/90 transition-colors duration-300">
                  "{testimonial.content}"
                </blockquote>

                {/* Company Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[var(--muted)]/50 to-[var(--muted)]/30 border border-[var(--border)]/30">
                  <div className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
                  <span className="text-xs font-medium text-[color:var(--text-light)]">
                    Now at {testimonial.company}
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-tl from-[var(--primary)]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-[var(--secondary)]/5 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom Statistics */}
        <div className="text-center">
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "1000+", label: "Success Stories" },
              { number: "95%", label: "Placement Rate" },
              { number: "4.8/5", label: "Student Rating" },
              { number: "50+", label: "Industry Partners" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-[color:var(--text-light)] font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}

          {/* Call-to-Action */}
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--surface)]/80 via-[var(--muted)]/50 to-[var(--surface)]/80 backdrop-blur-sm border border-[var(--border)]/30 shadow-lg">
            <p className="text-[color:var(--text)] font-medium">
              Ready to write your own success story?
            </p>
            <a
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1"
            >
              <span className="relative z-10">Apply Now</span>
              <svg
                className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1"
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
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
