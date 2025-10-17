import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AboutPage() {
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent rounded-full" />
              <span className="text-sm font-bold text-[color:var(--secondary)] uppercase tracking-[0.2em]">
                Learn About Us
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-[var(--secondary)] to-transparent rounded-full" />
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
                About Us
              </span>
            </h1>

            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl sm:text-2xl text-[color:var(--text-light)] leading-relaxed font-light">
                MARATHWADA INSTITUTE OF TECHNOLOGY AND MANAGEMENT (MITM) in
                Umari, Dist. Nanded is committed to delivering quality education
                with modern infrastructure and an industry-oriented approach.
              </p>
              <p className="text-lg text-[color:var(--text)] leading-relaxed">
                We focus on holistic development, discipline, and innovation to
                shape future-ready professionals. Our institute has a noble goal
                of fulfilling the needs of our society by providing effective
                education and the highest standard training to students across
                various fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--muted)]/20 via-[var(--surface)] to-[var(--muted)]/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">
              <span className="text-[color:var(--primary)]">Our </span>
              <span className="bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
                Leadership
              </span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-12 shadow-xl">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              {/* Director Photo */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  {/* Director Image Container */}
                  <div className="w-64 h-64 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center overflow-hidden shadow-2xl">
                    <img
                      src="/path-to-director-image.jpg"
                      alt="Director"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>

              {/* Director Information */}
              <div className="text-center lg:text-left space-y-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[color:var(--primary)] mb-2">
                    MR. RAMHARI CHAVAN
                  </h3>
                  <p className="text-lg font-semibold text-[color:var(--secondary)] mb-4">
                    Director
                  </p>
                </div>

                <div className="space-y-4 text-[color:var(--text)] leading-relaxed">
                  <p className="text-lg">
                    MITM is committed to providing better education to ensure
                    that all students get better and quick job opportunities.
                    Our students are provided with practical attachment training
                    in government Brigade's training centres.
                  </p>

                  <p>
                    The MITM knows that education is fundamental for the
                    complete development of individuals. As we grow, we will
                    expand into new technology. We have well-trained staff,
                    advanced study material, and good quality practical
                    training.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20">
                    <span className="text-sm font-medium text-[color:var(--primary)]">
                      Educational Excellence
                    </span>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--secondary)]/10 to-[var(--highlight)]/10 border border-[var(--secondary)]/20">
                    <span className="text-sm font-medium text-[color:var(--secondary)]">
                      Industry Training
                    </span>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--highlight)]/10 to-[var(--primary)]/10 border border-[var(--highlight)]/20">
                    <span className="text-sm font-medium text-[color:var(--highlight)]">
                      Modern Technology
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Vision",
                description:
                  "To become a premier institute delivering transformative education and research that shapes tomorrow's leaders and innovators.",
                gradient: "from-blue-500/10 to-purple-500/10",
              },
              {
                title: "Mission",
                description:
                  "To nurture talent with values, skills, and a spirit of innovation for societal impact through comprehensive education and industry partnerships.",
                gradient: "from-green-500/10 to-teal-500/10",
              },
              {
                title: "Values",
                description:
                  "Integrity, Excellence, Inclusivity, and Lifelong Learning form the foundation of our educational philosophy and institutional culture.",
                gradient: "from-orange-500/10 to-red-500/10",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border border-[var(--secondary)]/20 bg-[color:var(--surface)] p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:border-[var(--secondary)]/40`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-[color:var(--primary)] mb-4 group-hover:text-[color:var(--secondary)] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[color:var(--text)] leading-relaxed group-hover:text-[color:var(--text)]/90 transition-colors duration-300">
                    {item.description}
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
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--muted)]/30 via-[var(--muted)]/50 to-[var(--muted)]/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-[color:var(--primary)]">Our </span>
              <span className="bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
                Approach
              </span>
            </h2>
            <p className="text-lg text-[color:var(--text-light)] max-w-3xl mx-auto">
              We continuously strive to achieve our educational goals through
              innovative teaching methodologies and comprehensive learning
              experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Industry-Oriented Education",
                description:
                  "Our curriculum is designed to meet current industry standards and future technological demands.",
              },
              {
                title: "Practical Training",
                description:
                  "Hands-on learning through well-equipped labs and practical sessions to reinforce theoretical knowledge.",
              },
              {
                title: "Industrial Visits",
                description:
                  "Regular industry exposure through organized visits to leading companies and manufacturing units.",
              },
              {
                title: "Modern Infrastructure",
                description:
                  "State-of-the-art facilities and equipment to provide the best learning environment for students.",
              },
              {
                title: "Holistic Development",
                description:
                  "Focus on overall personality development including technical skills, communication, and leadership.",
              },
              {
                title: "Innovation & Research",
                description:
                  "Encouraging creative thinking and research activities to foster innovation among students.",
              },
            ].map((approach, index) => (
              <div
                key={approach.title}
                className="group bg-[color:var(--surface)] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[var(--border)]/50 hover:border-[var(--secondary)]/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-serif text-xl font-bold text-[color:var(--primary)] mb-3 group-hover:text-[color:var(--secondary)] transition-colors duration-300">
                  {approach.title}
                </h3>
                <p className="text-[color:var(--text-light)] leading-relaxed">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Way of Successful Career Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[var(--surface)] via-[var(--surface)]/95 to-[var(--surface)]/90 backdrop-blur-sm rounded-3xl border border-[var(--secondary)]/20 p-12 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="font-serif text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                  Way of Successful Career
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-[color:var(--text)] leading-relaxed">
              <p className="text-xl font-light text-[color:var(--primary)] text-center mb-8">
                The best choice to make when you are planning your future
              </p>

              <p className="text-lg">
                Welcome and thank you for considering MITM, an institute that
                truly values its students. We know that you have a choice where
                to study, and we understand just how difficult it is to choose
                the right courses and the best institution that will suit you.
              </p>

              <p className="text-lg">
                One of the most important decisions you will make is your future
                career, as your life will be affected by your choice. Most of us
                are in the position at various times in our lives when we look
                to improve our skills and qualifications, whether as a new
                student or while in a job. It is difficult to make the right
                choice and determine what will be best for us.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                {[
                  {
                    title: "Expert Guidance",
                    description:
                      "Our experienced counselors help you choose the right career path based on your interests and strengths.",
                  },
                  {
                    title: "Industry Connections",
                    description:
                      "Strong partnerships with leading companies ensure better placement opportunities for our graduates.",
                  },
                  {
                    title: "Continuous Support",
                    description:
                      "We provide ongoing support throughout your academic journey and beyond into your professional career.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-gradient-to-br from-[var(--muted)]/30 to-transparent border border-[var(--border)]/50"
                  >
                    <h3 className="font-serif text-lg font-bold text-[color:var(--secondary)] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[color:var(--text-light)]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative py-20 bg-gradient-to-r from-[var(--surface)] via-[var(--muted)]/30 to-[var(--surface)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[color:var(--primary)] mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-[color:var(--text-light)] mb-8 max-w-2xl mx-auto">
            Discover how MITM can help you achieve your academic and career
            goals through our comprehensive programs and industry partnerships.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/courses"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 min-w-[200px]"
            >
              <span className="relative z-10">Explore Programs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";

// export default function AboutPage() {
//   return (
//     <main className="relative overflow-hidden">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-[var(--surface)] via-[var(--muted)]/30 to-[var(--surface)] pt-28 pb-20 overflow-hidden">
//         {/* Background Decorative Elements */}
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/8 to-transparent rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[var(--secondary)]/6 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[var(--highlight)]/4 to-transparent rounded-full blur-3xl animate-pulse delay-500" />
//         </div>

//         {/* Subtle Pattern */}
//         <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.3)_1px,transparent_0)] bg-[size:50px_50px]" />

//         <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//           {/* Page Title */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-4 mb-8">
//               <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent rounded-full" />
//               <span className="text-sm font-bold text-[color:var(--secondary)] uppercase tracking-[0.2em]">
//                 Learn About Us
//               </span>
//               <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-[var(--secondary)] to-transparent rounded-full" />
//             </div>

//             <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
//                 About Us
//               </span>
//             </h1>

//             <div className="max-w-4xl mx-auto space-y-6">
//               <p className="text-xl sm:text-2xl text-[color:var(--text-light)] leading-relaxed font-light">
//                 MARATHWADA INSTITUTE OF TECHNOLOGY AND MANAGEMENT (MITM) in
//                 Umari, Dist. Nanded is committed to delivering quality education
//                 with modern infrastructure and an industry-oriented approach.
//               </p>
//               <p className="text-lg text-[color:var(--text)] leading-relaxed">
//                 We focus on holistic development, discipline, and innovation to
//                 shape future-ready professionals. Our institute has a noble goal
//                 of fulfilling the needs of our society by providing effective
//                 education and the highest standard training to students across
//                 various fields.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vision, Mission, Values Section */}
//       <section className="relative py-20">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 title: "Vision",
//                 description:
//                   "To become a premier institute delivering transformative education and research that shapes tomorrow's leaders and innovators.",
//                 gradient: "from-blue-500/10 to-purple-500/10",
//               },
//               {
//                 title: "Mission",
//                 description:
//                   "To nurture talent with values, skills, and a spirit of innovation for societal impact through comprehensive education and industry partnerships.",
//                 gradient: "from-green-500/10 to-teal-500/10",
//               },
//               {
//                 title: "Values",
//                 description:
//                   "Integrity, Excellence, Inclusivity, and Lifelong Learning form the foundation of our educational philosophy and institutional culture.",
//                 gradient: "from-orange-500/10 to-red-500/10",
//               },
//             ].map((item, index) => (
//               <div
//                 key={item.title}
//                 className={`group relative overflow-hidden rounded-3xl border border-[var(--secondary)]/20 bg-[color:var(--surface)] p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:border-[var(--secondary)]/40`}
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 {/* Background Gradient */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//                 />

//                 {/* Card Content */}
//                 <div className="relative z-10">
//                   {/* Title */}
//                   <h3 className="font-serif text-2xl font-bold text-[color:var(--primary)] mb-4 group-hover:text-[color:var(--secondary)] transition-colors duration-300">
//                     {item.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-[color:var(--text)] leading-relaxed group-hover:text-[color:var(--text)]/90 transition-colors duration-300">
//                     {item.description}
//                   </p>

//                   {/* Hover Arrow */}
//                   <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
//                     <svg
//                       className="w-6 h-6 text-[color:var(--secondary)]"
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
//                   </div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[var(--secondary)]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl from-[var(--primary)]/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Approach Section */}
//       <section className="relative py-20 bg-gradient-to-br from-[var(--muted)]/30 via-[var(--muted)]/50 to-[var(--muted)]/30">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
//               <span className="text-[color:var(--primary)]">Our </span>
//               <span className="bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
//                 Approach
//               </span>
//             </h2>
//             <p className="text-lg text-[color:var(--text-light)] max-w-3xl mx-auto">
//               We continuously strive to achieve our educational goals through
//               innovative teaching methodologies and comprehensive learning
//               experiences.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "Industry-Oriented Education",
//                 description:
//                   "Our curriculum is designed to meet current industry standards and future technological demands.",
//               },
//               {
//                 title: "Practical Training",
//                 description:
//                   "Hands-on learning through well-equipped labs and practical sessions to reinforce theoretical knowledge.",
//               },
//               {
//                 title: "Industrial Visits",
//                 description:
//                   "Regular industry exposure through organized visits to leading companies and manufacturing units.",
//               },
//               {
//                 title: "Modern Infrastructure",
//                 description:
//                   "State-of-the-art facilities and equipment to provide the best learning environment for students.",
//               },
//               {
//                 title: "Holistic Development",
//                 description:
//                   "Focus on overall personality development including technical skills, communication, and leadership.",
//               },
//               {
//                 title: "Innovation & Research",
//                 description:
//                   "Encouraging creative thinking and research activities to foster innovation among students.",
//               },
//             ].map((approach, index) => (
//               <div
//                 key={approach.title}
//                 className="group bg-[color:var(--surface)] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[var(--border)]/50 hover:border-[var(--secondary)]/30"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <h3 className="font-serif text-xl font-bold text-[color:var(--primary)] mb-3 group-hover:text-[color:var(--secondary)] transition-colors duration-300">
//                   {approach.title}
//                 </h3>
//                 <p className="text-[color:var(--text-light)] leading-relaxed">
//                   {approach.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Statistics Section */}
//       {/* <section className="relative py-20">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="font-serif text-4xl font-bold text-[color:var(--primary)] mb-4">
//               Our Achievements
//             </h2>
//             <p className="text-lg text-[color:var(--text-light)]">
//               Numbers that reflect our commitment to excellence in education
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               {
//                 number: "15+",
//                 label: "Years of Excellence",
//                 color: "var(--primary)",
//               },
//               {
//                 number: "1000+",
//                 label: "Successful Graduates",
//                 color: "var(--secondary)",
//               },
//               {
//                 number: "15+",
//                 label: "Industry Partners",
//                 color: "var(--highlight)",
//               },
//               {
//                 number: "90%",
//                 label: "Placement Rate",
//                 color: "var(--primary)",
//               },
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="text-center group"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div
//                   className="text-4xl sm:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300"
//                   style={{ color: stat.color }}
//                 >
//                   {stat.number}
//                 </div>
//                 <div className="text-sm text-[color:var(--text-light)] font-medium uppercase tracking-wider">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Call-to-Action Section */}
//       <section className="relative py-20 bg-gradient-to-r from-[var(--surface)] via-[var(--muted)]/30 to-[var(--surface)]">
//         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[color:var(--primary)] mb-6">
//             Ready to Join Our Community?
//           </h2>
//           <p className="text-lg text-[color:var(--text-light)] mb-8 max-w-2xl mx-auto">
//             Discover how MITM can help you achieve your academic and career
//             goals through our comprehensive programs and industry partnerships.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <a
//               href="/courses"
//               className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 min-w-[200px]"
//             >
//               <span className="relative z-10">Explore Programs</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </a>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"

// export default function AboutPage() {
//   return (
//     <main>
//       <Navbar />
//       <section className="mx-auto max-w-5xl px-4 pt-28 pb-14 sm:px-6 lg:px-8">
//         <h1 className="font-serif text-4xl font-bold text-[color:var(--primary)]">About Us</h1>
//         <p className="mt-4 text-[color:var(--text-light)] leading-relaxed">
//           MARATHWADA INSTITUTE OF TECHNOLOGY AND MANAGEMENT (MITM) in Umari, Dist. Nanded (431807) is committed to
//           delivering quality education with modern infrastructure and an industry-oriented approach. We focus on
//           holistic development, discipline, and innovation to shape future-ready professionals.
//         </p>
//         <div className="mt-10 grid gap-6 md:grid-cols-3">
//           {[
//             { t: "Vision", d: "To become a premier institute delivering transformative education and research." },
//             {
//               t: "Mission",
//               d: "To nurture talent with values, skills, and a spirit of innovation for societal impact.",
//             },
//             { t: "Values", d: "Integrity, Excellence, Inclusivity, and Lifelong Learning." },
//           ].map((it) => (
//             <div key={it.t} className="rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] p-6">
//               <h3 className="font-serif text-xl font-bold text-[color:var(--primary)]">{it.t}</h3>
//               <p className="mt-2 text-[color:var(--text)]">{it.d}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//       <Footer />
//     </main>
//   )
// }
