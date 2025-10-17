"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";

const items = [
  // {
  //   label: "Annual Fest",
  //   src: "/annual-fest-maroon-gold-campus.jpg",
  //   category: "Events",
  //   description:
  //     "Our vibrant annual cultural celebration bringing together students and faculty",
  // },
  // {
  //   label: "Orientation Day",
  //   src: "/orientation-day-campus.jpg",
  //   category: "Events",
  //   description:
  //     "Welcome ceremony for new students beginning their academic journey",
  // },
  // {
  //   label: "Tech Workshop",
  //   src: "/tech-workshop-lab.jpg",
  //   category: "Academics",
  //   description:
  //     "Hands-on technical workshops in our state-of-the-art laboratories",
  // },
  // {
  //   label: "Sports Meet",
  //   src: "/sports-meet-ground.jpg",
  //   category: "Sports",
  //   description:
  //     "Inter-department sports competition showcasing athletic excellence",
  // },
  {
    label: "Library",
    src: "/diverse-group-of-engineering-students-graduating.jpg",
    category: "Facilities",
    description:
      "Modern library facilities providing peaceful study environment",
  },
  // {
  //   label: "Innovation Lab",
  //   src: "/innovation-lab.jpg",
  //   category: "Facilities",
  //   description:
  //     "Cutting-edge innovation lab for research and development projects",
  // },
  {
    label: "Cultural Night",
    src: "/cultural-night-stage.jpg",
    category: "Events",
    description:
      "Spectacular cultural performances celebrating diversity and talent",
  },
  {
    label: "Guest Lecture",
    src: "/guest-lecture-seminar.jpg",
    category: "Academics",
    description: "Industry experts sharing knowledge and real-world insights",
  },
  // {
  //   label: "Convocation",
  //   src: "/convocation-ceremony.jpg",
  //   category: "Events",
  //   description:
  //     "Graduation ceremony celebrating academic achievements and success",
  // },
];

// const categories = ["All", "Events", "Academics", "Sports", "Facilities"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<(typeof items)[0] | null>(
    null
  );

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

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
                Campus Life
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-[var(--secondary)] to-transparent rounded-full" />
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>

            <p className="text-xl text-[color:var(--text-light)] max-w-3xl mx-auto leading-relaxed">
              Explore memorable moments from our vibrant campus life. From
              academic achievements to cultural celebrations, discover the
              essence of the MITM experience.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          {/* <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <div
                key={`${item.label}-${activeCategory}`}
                className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  height:
                    index % 4 === 0
                      ? "400px"
                      : index % 3 === 0
                      ? "320px"
                      : "360px",
                }}
                onClick={() => setSelectedImage(item)}
              >
                {/* Image */}
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Category Badge */}
                  <div className="mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--secondary)] transition-colors duration-300">
                    {item.label}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {item.description}
                  </p>

                  {/* View Button */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="inline-flex items-center gap-2 text-[var(--secondary)] text-sm font-semibold">
                      <span>View Details</span>
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[var(--secondary)]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-[color:var(--primary)] mb-2">
                No Images Found
              </h3>
              <p className="text-[color:var(--text-light)]">
                Try selecting a different category to view more content.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal/Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-6xl max-h-[90vh] mx-4">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors duration-300"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* Image Info */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
                <span className="text-white text-sm font-medium">
                  {selectedImage.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedImage.label}
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call-to-Action Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--muted)]/30 via-[var(--muted)]/50 to-[var(--muted)]/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[color:var(--primary)] mb-6">
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-lg text-[color:var(--text-light)] mb-8 max-w-2xl mx-auto">
            Join our vibrant community and create your own memorable moments at
            MITM. Experience the perfect blend of academic excellence and campus
            life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/courses"
              className="group relative overflow-hidden rounded-full border-2 border-[var(--primary)] bg-transparent px-8 py-4 font-semibold text-[color:var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:scale-105 hover:shadow-lg hover:-translate-y-1 min-w-[200px]"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"

// const items = [
//   { label: "Annual Fest", src: "/annual-fest-maroon-gold-campus.jpg" },
//   { label: "Orientation Day", src: "/orientation-day-campus.jpg" },
//   { label: "Tech Workshop", src: "/tech-workshop-lab.jpg" },
//   { label: "Sports Meet", src: "/sports-meet-ground.jpg" },
//   { label: "Library", src: "/library-reading.jpg" },
//   { label: "Innovation Lab", src: "/innovation-lab.jpg" },
//   { label: "Cultural Night", src: "/cultural-night-stage.jpg" },
//   { label: "Guest Lecture", src: "/guest-lecture-seminar.jpg" },
//   { label: "Convocation", src: "/convocation-ceremony.jpg" },
// ]

// export default function GalleryPage() {
//   return (
//     <main>
//       <Navbar />
//       <section className="mx-auto max-w-7xl px-4 pt-28 pb-14 sm:px-6 lg:px-8">
//         <h1 className="font-serif text-4xl font-bold text-[color:var(--primary)]">Gallery</h1>
//         <p className="mt-2 text-[color:var(--text-light)]">Moments from our campus.</p>

//         <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
//           {items.map((it) => (
//             <div
//               key={it.label}
//               className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-700 hover:shadow-xl"
//             >
//               <img
//                 src={it.src || "/placeholder.svg"}
//                 alt={it.label}
//                 className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//                 <p className="text-lg font-semibold text-white">{it.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <Footer />
//     </main>
//   )
// }
