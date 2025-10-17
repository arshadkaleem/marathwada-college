import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getCourseBySlug } from "@/lib/courses";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = getCourseBySlug(params.slug);
  if (!course) return notFound();

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--surface)] via-[var(--muted)]/30 to-[var(--surface)] pt-28 pb-12 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/8 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-[var(--secondary)]/6 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Link
            href="/courses"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[color:var(--primary)] hover:text-[color:var(--secondary)] transition-colors duration-300 mb-8"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Courses
          </Link>

          {/* Course Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[var(--primary)]/15 to-[var(--secondary)]/10 border border-[var(--primary)]/25">
                <span className="text-xs font-bold text-[color:var(--primary)] uppercase tracking-wider">
                  {course.category}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[color:var(--text-light)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--highlight)]" />
                <span className="font-medium text-[color:var(--highlight)]">
                  {course.duration}
                </span>
              </div>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
                {course.title}
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Course Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="/course-banner.jpg"
                  alt={course.title}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* 1. Course Overview */}
              <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-8 shadow-lg">
                <h2 className="font-serif text-3xl font-bold text-[color:var(--primary)] mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold">
                    1
                  </span>
                  Course Overview
                </h2>
                <div className="space-y-6 text-[color:var(--text)] leading-relaxed">
                  <p className="text-lg">
                    {course.overview || course.description}
                  </p>
                  <p>
                    The program blends theoretical foundations with practical
                    exposure. Students gain hands-on experience through labs,
                    mini-projects, and seminars. On successful completion,
                    graduates are equipped for entry-level roles and further
                    studies.
                  </p>
                </div>
              </div>

              {/* 2. Eligibility Criteria */}
              <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-8 shadow-lg">
                <h3 className="font-serif text-3xl font-bold text-[color:var(--primary)] mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold">
                    2
                  </span>
                  Eligibility Criteria
                </h3>
                <ul className="space-y-3">
                  {(
                    course.eligibility || [
                      "As per institute and regulatory guidelines",
                      "Minimum educational qualifications required",
                      "Age criteria as specified by the institution",
                      "Basic subject knowledge prerequisites",
                    ]
                  ).map((criterion, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] mt-2 flex-shrink-0" />
                      <span className="text-[color:var(--text)] leading-relaxed">
                        {criterion}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Admission Procedure */}
              <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-8 shadow-lg">
                <h3 className="font-serif text-3xl font-bold text-[color:var(--primary)] mb-8 flex items-center gap-3">
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold">
                    3
                  </span>
                  Admission Procedure (Step-by-Step)
                </h3>
                <div className="space-y-6">
                  {(
                    course.admissionProcedure || [
                      {
                        step: 1,
                        title: "Application Form",
                        description:
                          "Obtain and complete the admission form from the institute's office or official website.",
                      },
                      {
                        step: 2,
                        title: "Document Submission",
                        description:
                          "Submit all required documents along with the completed application form.",
                      },
                      {
                        step: 3,
                        title: "Application Fee Payment",
                        description:
                          "Pay the prescribed registration/application fee through the specified payment methods.",
                      },
                      {
                        step: 4,
                        title: "Merit Assessment",
                        description:
                          "Admission based on merit or entrance examination as per institute guidelines.",
                      },
                      {
                        step: 5,
                        title: "Admission Confirmation",
                        description:
                          "Upon selection, confirm admission by paying fees and submitting original documents.",
                      },
                      {
                        step: 6,
                        title: "Course Commencement",
                        description:
                          "Attend orientation and begin classes as per the academic schedule.",
                      },
                    ]
                  ).map((step, index) => (
                    <div
                      key={index}
                      className="group relative p-6 rounded-2xl bg-gradient-to-br from-[var(--muted)]/30 to-transparent border border-[var(--border)]/50 hover:border-[var(--secondary)]/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] text-white font-bold text-sm flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[color:var(--primary)] text-lg mb-2 group-hover:text-[color:var(--secondary)] transition-colors duration-300">
                            {step.title}
                          </h4>
                          <p className="text-[color:var(--text-light)] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Documents Required */}
              <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-8 shadow-lg">
                <h3 className="font-serif text-3xl font-bold text-[color:var(--primary)] mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold">
                    4
                  </span>
                  Documents Required (Checklist)
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {(
                    course.documentsRequired || [
                      "Completed Application Form",
                      "10th & 12th Mark Sheets",
                      "Educational Certificates",
                      "Transfer/Migration Certificate",
                      "ID Proof (Aadhaar/Passport)",
                      "Passport Size Photographs",
                      "Category Certificate (if applicable)",
                      "Experience Certificate (if any)",
                    ]
                  ).map((document, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-[var(--muted)]/20 to-transparent"
                    >
                      <div className="flex items-center justify-center w-6 h-6 rounded bg-green-100 text-green-600 flex-shrink-0">
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-[color:var(--text)] text-sm">
                        {document}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Institutes Offering This Course */}
              <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-8 shadow-lg">
                <h3 className="font-serif text-3xl font-bold text-[color:var(--primary)] mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold">
                    5
                  </span>
                  Institutes Offering This Course
                </h3>
                <div className="grid gap-4 md:grid-cols-1">
                  {(
                    course.institutesOffering || [
                      "Marathwada Institute of Technology and Management (MITM), Umari",
                      "Various Government Technical Institutions",
                      "State Technical Universities",
                      "Recognized Private Institutes",
                      "Distance Learning Universities",
                    ]
                  ).map((institute, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-[var(--muted)]/20 to-transparent hover:from-[var(--secondary)]/5 hover:to-[var(--highlight)]/5 transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] mt-2 flex-shrink-0" />
                      <span className="text-[color:var(--text)] leading-relaxed">
                        {institute}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Career Opportunities */}
              <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-8 shadow-lg">
                <h3 className="font-serif text-3xl font-bold text-[color:var(--primary)] mb-8 flex items-center gap-3">
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white font-bold">
                    6
                  </span>
                  Career Opportunities After Completion
                </h3>

                <div className="grid gap-8 md:grid-cols-2">
                  {/* Job Roles */}
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[color:var(--secondary)] mb-4">
                      Job Roles
                    </h4>
                    <div className="space-y-3">
                      {(
                        course.careerOpportunities?.roles || [
                          "Entry-level Professional",
                          "Technical Associate",
                          "Junior Engineer",
                          "Specialist Trainee",
                          "Industry Professional",
                        ]
                      ).map((role, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)]" />
                          <span className="text-[color:var(--text)]">
                            {role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industries */}
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[color:var(--secondary)] mb-4">
                      Industries
                    </h4>
                    <div className="space-y-3">
                      {(
                        course.careerOpportunities?.industries || [
                          "Manufacturing",
                          "Service Sector",
                          "Technology Companies",
                          "Government Organizations",
                          "Private Enterprises",
                        ]
                      ).map((industry, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--highlight)] to-[var(--primary)]" />
                          <span className="text-[color:var(--text)]">
                            {industry}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Salary Range */}
                {course.careerOpportunities?.salaryRange && (
                  <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
                    <h4 className="font-serif text-lg font-bold text-green-700 mb-2">
                      Expected Salary Range
                    </h4>
                    <p className="text-green-600 font-semibold">
                      {course.careerOpportunities.salaryRange}
                    </p>
                  </div>
                )}

                {/* Additional Career Info */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[var(--muted)]/30 to-transparent border border-[var(--border)]/50">
                  <h4 className="font-serif text-lg font-bold text-[color:var(--primary)] mb-2">
                    Career Growth
                  </h4>
                  <p className="text-[color:var(--text-light)] text-sm leading-relaxed">
                    Graduates can expect progressive career advancement with
                    experience, additional certifications, and continuous skill
                    development. Many alumni have successfully transitioned into
                    leadership roles within 5-10 years of graduation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Course Quick Info Card */}
              <div className="sticky top-32 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-8 shadow-lg">
                <h3 className="font-serif text-xl font-bold text-[color:var(--primary)] mb-6">
                  Course Details
                </h3>

                {/* Quick Stats */}
                <div className="space-y-4 mb-8">
                  {[
                    { label: "Category", value: course.category, icon: "📚" },
                    { label: "Duration", value: course.duration, icon: "⏰" },
                    // { label: "Mode", value: "Full-time", icon: "🎓" },
                    // {
                    //   label: "Assessment",
                    //   value: "Internal + External",
                    //   icon: "📝",
                    // },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-[var(--border)]/30 last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium text-[color:var(--text)]">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-sm text-[color:var(--text-light)] font-semibold">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                {/* <div className="space-y-4">
                  <a
                    href="/contact"
                    className="group relative w-full overflow-hidden inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--secondary)]/95 to-[var(--highlight)] px-8 py-4 font-semibold text-[color:var(--secondary-foreground)] shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[var(--secondary)]/25 hover:scale-105 hover:-translate-y-1"
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
                  </a>

                  <a
                    href="/download"
                    className="group relative w-full overflow-hidden inline-flex items-center justify-center gap-3 rounded-full border-2 border-[var(--primary)] bg-transparent px-8 py-4 font-semibold text-[color:var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:scale-105 hover:shadow-lg hover:-translate-y-1"
                  >
                    <svg
                      className="w-5 h-5 transition-transform group-hover:scale-110"
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
                    Download Brochure
                  </a>
                </div> */}

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-[var(--border)]/30">
                  <p className="text-sm text-[color:var(--text-light)] mb-3">
                    Need more information?
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <svg
                      className="w-4 h-4 text-[color:var(--secondary)]"
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
                    <a
                      href="tel:+918275428401"
                      className="text-[color:var(--secondary)] hover:text-[color:var(--highlight)] transition-colors duration-300"
                    >
                      +91 8275 428 401
                    </a>
                  </div>
                </div>
              </div>

              {/* Why Choose This Course */}
              <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-6 shadow-lg">
                <h4 className="font-serif text-lg font-bold text-[color:var(--primary)] mb-4">
                  Why Choose This Course?
                </h4>

                <div className="space-y-3">
                  {[
                    "Industry-oriented curriculum",
                    "Experienced faculty",
                    "Modern infrastructure",
                    "Placement assistance",
                    "Practical exposure",
                    "Professional development",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] animate-pulse"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                      <span className="text-sm text-[color:var(--text)]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-6 shadow-lg">
                <h4 className="font-serif text-lg font-bold text-[color:var(--primary)] mb-4">
                  Key Features
                </h4>

                <div className="space-y-4">
                  {[
                    {
                      feature: "Expert Faculty",
                      description: "Learn from industry professionals",
                    },
                    {
                      feature: "Practical Training",
                      description: "Hands-on learning approach",
                    },
                    {
                      feature: "Industry Exposure",
                      description: "Regular visits and guest lectures",
                    },
                    {
                      feature: "Modern Facilities",
                      description: "State-of-the-art infrastructure",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-gradient-to-r from-[var(--muted)]/20 to-transparent"
                    >
                      <h5 className="font-semibold text-[color:var(--secondary)] text-sm mb-1">
                        {item.feature}
                      </h5>
                      <p className="text-xs text-[color:var(--text-light)]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses CTA */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--muted)]/30 via-[var(--muted)]/50 to-[var(--muted)]/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[color:var(--primary)] mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-[color:var(--text-light)] mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who have built their careers
            through our comprehensive programs. Take the first step towards your
            future today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/courses"
              className="group relative overflow-hidden rounded-full border-2 border-[var(--primary)] bg-transparent px-8 py-4 font-semibold text-[color:var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:scale-105 hover:shadow-lg hover:-translate-y-1 min-w-[200px]"
            >
              View All Courses
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { number: "90%", label: "Placement Rate" },
              { number: "15+", label: "Years Experience" },
              { number: "1000+", label: "Graduates" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[color:var(--secondary)] mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-[color:var(--text-light)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";
// import { getCourseBySlug } from "@/lib/courses";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// export default function CourseDetailPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const course = getCourseBySlug(params.slug);
//   if (!course) return notFound();

//   return (
//     <main className="relative overflow-hidden">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-[var(--surface)] via-[var(--muted)]/30 to-[var(--surface)] pt-28 pb-12 overflow-hidden">
//         {/* Background Decorative Elements */}
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/8 to-transparent rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-[var(--secondary)]/6 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
//         </div>

//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//           {/* Breadcrumb */}
//           <Link
//             href="/courses"
//             className="group inline-flex items-center gap-2 text-sm font-medium text-[color:var(--primary)] hover:text-[color:var(--secondary)] transition-colors duration-300 mb-8"
//           >
//             <svg
//               className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             Back to Courses
//           </Link>

//           {/* Course Header */}
//           <div className="mb-8">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[var(--primary)]/15 to-[var(--secondary)]/10 border border-[var(--primary)]/25">
//                 <span className="text-xs font-bold text-[color:var(--primary)] uppercase tracking-wider">
//                   {course.category}
//                 </span>
//               </div>
//               <div className="flex items-center gap-2 text-sm text-[color:var(--text-light)]">
//                 <div className="w-1.5 h-1.5 rounded-full bg-[var(--highlight)]" />
//                 <span className="font-medium text-[color:var(--highlight)]">
//                   {course.duration}
//                 </span>
//               </div>
//             </div>

//             <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
//                 {course.title}
//               </span>
//             </h1>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="relative py-12">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-12 lg:grid-cols-3">
//             {/* Left Column - Content */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* Course Image */}
//               <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
//                 <img
//                   src="/course-hero-image.jpg"
//                   alt={course.title}
//                   className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </div>

//               {/* Course Description */}
//               <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-8 shadow-lg">
//                 <h2 className="font-serif text-2xl font-bold text-[color:var(--primary)] mb-6">
//                   Course Overview
//                 </h2>

//                 <div className="space-y-6 text-[color:var(--text)] leading-relaxed">
//                   <p className="text-lg">{course.description}</p>
//                   <p>
//                     The program blends theoretical foundations with practical
//                     exposure. Students gain hands-on experience through labs,
//                     mini-projects, and seminars. On successful completion,
//                     graduates are equipped for entry-level roles and further
//                     studies.
//                   </p>
//                 </div>
//               </div>

//               {/* Course Details */}
//               <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-8 shadow-lg">
//                 <h3 className="font-serif text-2xl font-bold text-[color:var(--primary)] mb-6">
//                   Course Information
//                 </h3>

//                 <div className="grid gap-6 md:grid-cols-2">
//                   {[
//                     {
//                       title: "Eligibility",
//                       description: "As per institute and regulatory guidelines",
//                       color: "var(--primary)",
//                     },
//                     {
//                       title: "Mode of Study",
//                       description: "Full-time on campus",
//                       color: "var(--secondary)",
//                     },
//                     {
//                       title: "Assessment",
//                       description: "Internal + External examinations",
//                       color: "var(--highlight)",
//                     },
//                     {
//                       title: "Duration",
//                       description: course.duration,
//                       color: "var(--primary)",
//                     },
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-[var(--muted)]/30 to-transparent border border-[var(--border)]/50"
//                     >
//                       <div
//                         className="w-3 h-3 rounded-full mt-2 animate-pulse"
//                         style={{ backgroundColor: item.color }}
//                       />
//                       <div>
//                         <h4 className="font-semibold text-[color:var(--primary)] mb-1">
//                           {item.title}
//                         </h4>
//                         <p className="text-sm text-[color:var(--text-light)]">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* What You'll Learn */}
//               <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-8 shadow-lg">
//                 <h3 className="font-serif text-2xl font-bold text-[color:var(--primary)] mb-6">
//                   What You'll Learn
//                 </h3>

//                 <div className="grid gap-4 md:grid-cols-2">
//                   {[
//                     "Industry-relevant theoretical foundations",
//                     "Hands-on practical experience through labs",
//                     "Real-world project implementation",
//                     "Professional presentation and communication skills",
//                     "Industry best practices and standards",
//                     "Problem-solving and analytical thinking",
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)]" />
//                       <span className="text-[color:var(--text)]">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Sidebar */}
//             <div className="lg:col-span-1 space-y-6">
//               {/* Course Quick Info Card */}
//               <div className="sticky top-32 bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-8 shadow-lg">
//                 <h3 className="font-serif text-xl font-bold text-[color:var(--primary)] mb-6">
//                   Course Details
//                 </h3>

//                 {/* Quick Stats */}
//                 <div className="space-y-4 mb-8">
//                   {[
//                     { label: "Category", value: course.category, icon: "📚" },
//                     { label: "Duration", value: course.duration, icon: "⏰" },
//                     { label: "Mode", value: "Full-time", icon: "🎓" },
//                     {
//                       label: "Assessment",
//                       value: "Internal + External",
//                       icon: "📝",
//                     },
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between py-3 border-b border-[var(--border)]/30 last:border-b-0"
//                     >
//                       <div className="flex items-center gap-3">
//                         <span className="text-lg">{item.icon}</span>
//                         <span className="font-medium text-[color:var(--text)]">
//                           {item.label}
//                         </span>
//                       </div>
//                       <span className="text-sm text-[color:var(--text-light)] font-semibold">
//                         {item.value}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="space-y-4">
//                   <a
//                     href="/contact"
//                     className="group relative w-full overflow-hidden inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--secondary)]/95 to-[var(--highlight)] px-8 py-4 font-semibold text-[color:var(--secondary-foreground)] shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[var(--secondary)]/25 hover:scale-105 hover:-translate-y-1"
//                   >
//                     <span className="relative z-10">Apply Now</span>
//                     <svg
//                       className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17 8l4 4m0 0l-4 4m4-4H3"
//                       />
//                     </svg>
//                     <div className="absolute inset-0 bg-gradient-to-r from-[var(--highlight)] to-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </a>

//                   <a
//                     href="/download"
//                     className="group relative w-full overflow-hidden inline-flex items-center justify-center gap-3 rounded-full border-2 border-[var(--primary)] bg-transparent px-8 py-4 font-semibold text-[color:var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:scale-105 hover:shadow-lg hover:-translate-y-1"
//                   >
//                     <svg
//                       className="w-5 h-5 transition-transform group-hover:scale-110"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                       />
//                     </svg>
//                     Download Brochure
//                   </a>
//                 </div>

//                 {/* Contact Info */}
//                 <div className="mt-6 pt-6 border-t border-[var(--border)]/30">
//                   <p className="text-sm text-[color:var(--text-light)] mb-3">
//                     Need more information?
//                   </p>
//                   <div className="flex items-center gap-2 text-sm">
//                     <svg
//                       className="w-4 h-4 text-[color:var(--secondary)]"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       />
//                     </svg>
//                     <a
//                       href="tel:+910000000000"
//                       className="text-[color:var(--secondary)] hover:text-[color:var(--highlight)] transition-colors duration-300"
//                     >
//                       +91 00000 00000
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Why Choose This Course */}
//               <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-6 shadow-lg">
//                 <h4 className="font-serif text-lg font-bold text-[color:var(--primary)] mb-4">
//                   Why Choose This Course?
//                 </h4>

//                 <div className="space-y-3">
//                   {[
//                     "Industry-oriented curriculum",
//                     "Experienced faculty",
//                     "Modern infrastructure",
//                     "Placement assistance",
//                     "Practical exposure",
//                   ].map((benefit, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <div
//                         className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] animate-pulse"
//                         style={{ animationDelay: `${index * 0.2}s` }}
//                       />
//                       <span className="text-sm text-[color:var(--text)]">
//                         {benefit}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Courses CTA */}
//       <section className="relative py-20 bg-gradient-to-br from-[var(--muted)]/30 via-[var(--muted)]/50 to-[var(--muted)]/30">
//         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[color:var(--primary)] mb-6">
//             Ready to Start Your Journey?
//           </h2>
//           <p className="text-lg text-[color:var(--text-light)] mb-8 max-w-2xl mx-auto">
//             Join thousands of successful graduates who have built their careers
//             through our comprehensive programs. Take the first step towards your
//             future today.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
//             <Link
//               href="/courses"
//               className="group relative overflow-hidden rounded-full border-2 border-[var(--primary)] bg-transparent px-8 py-4 font-semibold text-[color:var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:scale-105 hover:shadow-lg hover:-translate-y-1 min-w-[200px]"
//             >
//               View All Courses
//             </Link>
//           </div>

//           {/* Trust Indicators */}
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import { getCourseBySlug } from "@/lib/courses"
// import Link from "next/link"
// import { notFound } from "next/navigation"

// export default function CourseDetailPage({ params }: { params: { slug: string } }) {
//   const course = getCourseBySlug(params.slug)
//   if (!course) return notFound()

//   return (
//     <main>
//       <Navbar />
//       <article className="mx-auto max-w-4xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
//         <Link href="/courses" className="text-sm text-[color:var(--primary)] hover:underline">
//           &larr; Back to Courses
//         </Link>
//         <h1 className="mt-3 font-serif text-4xl font-bold text-[color:var(--primary)]">{course.title}</h1>
//         <p className="mt-1 text-[color:var(--text-light)]">
//           {course.category} • {course.duration}
//         </p>

//         <img src="/course-hero-image.jpg" alt={course.title} className="mt-8 h-64 w-full rounded-xl object-cover" />

//         <section className="mt-8 space-y-4 leading-relaxed text-[color:var(--text)]">
//           <p>{course.description}</p>
//           <p>
//             The program blends theoretical foundations with practical exposure. Students gain hands-on experience
//             through labs, mini-projects, and seminars. On successful completion, graduates are equipped for entry-level
//             roles and further studies.
//           </p>
//           <ul className="list-disc pl-5">
//             <li>Eligibility: As per institute and regulatory guidelines</li>
//             <li>Mode: Full-time on campus</li>
//             <li>Assessment: Internal + External examinations</li>
//           </ul>
//         </section>

//         <div className="mt-8 flex gap-3">
//           <a
//             href="/download"
//             className="rounded-full border border-[var(--secondary)] bg-[color:var(--surface)] px-5 py-2 font-semibold text-[color:var(--primary)] hover:bg-[color:var(--secondary)] hover:text-[color:var(--secondary-foreground)]"
//           >
//             Download Brochure
//           </a>
//           <a
//             href="/contact"
//             className="rounded-full bg-[color:var(--secondary)] px-5 py-2 font-semibold text-[color:var(--secondary-foreground)] hover:bg-[color:var(--highlight)]"
//           >
//             Apply Now
//           </a>
//         </div>
//       </article>
//       <Footer />
//     </main>
//   )
// }
