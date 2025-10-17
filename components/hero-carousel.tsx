"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Slide = {
  src: string;
  alt: string;
  headline: string;
  sub: string;
};

const slides: Slide[] = [
  {
    src: "/campus-building-in-warm-sunlight-deep-maroon-and-g.jpg",
    alt: "Campus Building",
    headline: "Empowering Education, Inspiring Innovation",
    sub: "Learn with purpose. Lead with integrity.",
  },
  {
    src: "/students-collaborating-in-lab-gold-accents.jpg",
    alt: "Students in Lab",
    headline: "Industry-Ready Programs",
    sub: "Curriculum aligned with modern industry standards.",
  },
  {
    src: "/graduation-ceremony-with-maroon-gowns-gold-details.jpg",
    alt: "Graduation Ceremony",
    headline: "Scholarships & Career Support",
    sub: "Guiding your journey from classroom to career.",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(0);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [index]);

  const nextSlide = () => {
    setProgress(0);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setProgress(0);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      aria-label="Hero"
      className="relative h-[90dvh] w-full overflow-hidden"
    >
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--secondary)]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[var(--highlight)]/5 to-transparent rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-10 opacity-5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.8)_1px,transparent_0)] bg-[size:50px_50px]" />

      {/* Enhanced Image Slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-out",
              i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
            )}
          >
            <img
              src={s.src || "/placeholder.svg"}
              alt={s.alt}
              className="h-full w-full object-cover filter brightness-90 contrast-110"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 z-30 -translate-y-1/2 group rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-3 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg"
        aria-label="Previous slide"
      >
        <svg
          className="h-6 w-6 transition-transform group-hover:-translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-30 -translate-y-1/2 group rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-3 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg"
        aria-label="Next slide"
      >
        <svg
          className="h-6 w-6 transition-transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Enhanced Content Area */}
      <div className="relative z-20 flex h-full items-center justify-center px-4 text-center">
        <div className="max-w-4xl">
          {/* Decorative Elements */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent rounded-full" />

          {/* Main Headline */}
          <h1
            className={cn(
              "font-serif font-bold text-white transition-all duration-1000 delay-200",
              "text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight",
              "drop-shadow-2xl mt-4",
              isLoaded
                ? "animate-fadeInUp opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            key={`headline-${index}`}
          >
            {slides[index].headline}
          </h1>

          {/* Enhanced Subtitle */}
          <p
            className={cn(
              "mt-6 text-lg sm:text-xl md:text-2xl text-white/95 font-light leading-relaxed drop-shadow-lg transition-all duration-1000 delay-400",
              isLoaded
                ? "animate-fadeIn opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
            key={`subtitle-${index}`}
          >
            {slides[index].sub}
          </p>

          {/* Enhanced Action Buttons */}
          <div
            className={cn(
              "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-600",
              isLoaded
                ? "animate-fadeInUp opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <a
              href="/courses"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--secondary)] via-[var(--secondary)]/95 to-[var(--highlight)] px-8 py-4 font-semibold text-[color:var(--secondary-foreground)] shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:-translate-y-1 min-w-[180px]"
            >
              <span className="relative z-10">Explore Courses</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--highlight)] to-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="/contact"
              className="group relative overflow-hidden rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-md px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:border-white hover:scale-105 hover:shadow-2xl hover:-translate-y-1 min-w-[180px]"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Dots with Progress */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 transform">
        <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setIndex(i);
                setProgress(0);
              }}
              className={cn(
                "relative group transition-all duration-300",
                i === index ? "scale-110" : "hover:scale-105"
              )}
            >
              <div
                className={cn(
                  "h-3 w-3 rounded-full transition-all duration-300",
                  i === index
                    ? "bg-[color:var(--secondary)] shadow-lg shadow-[var(--secondary)]/50"
                    : "bg-white/60 hover:bg-white/80"
                )}
              />
              {i === index && (
                <div className="absolute inset-0 rounded-full border-2 border-[var(--secondary)]/50 animate-pulse" />
              )}
            </button>
          ))}

          {/* Progress Indicator */}
          <div className="ml-4 flex items-center gap-2">
            <div className="w-16 h-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[var(--secondary)] to-[var(--highlight)] transition-all duration-100 ease-linear rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* <span className="text-xs text-white/80 font-medium min-w-[3ch] text-center">
              {String(index + 1).padStart(2, "0")}
            </span> */}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 z-10 opacity-20">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
      </div>
      <div className="absolute bottom-32 left-16 z-10 opacity-30">
        <div className="w-1 h-1 bg-[var(--secondary)] rounded-full animate-pulse delay-1000" />
      </div>
      <div className="absolute top-1/3 right-12 z-10 opacity-25">
        <div className="w-1.5 h-1.5 bg-[var(--highlight)] rounded-full animate-pulse delay-500" />
      </div>
    </section>
  );
}

// "use client"

// import { useEffect, useState } from "react"

// type Slide = {
//   src: string
//   alt: string
//   headline: string
//   sub: string
// }

// const slides: Slide[] = [
//   {
//     src: "/campus-building-in-warm-sunlight-deep-maroon-and-g.jpg",
//     alt: "Campus Building",
//     headline: "Empowering Education, Inspiring Innovation",
//     sub: "Learn with purpose. Lead with integrity.",
//   },
//   {
//     src: "/students-collaborating-in-lab-gold-accents.jpg",
//     alt: "Students in Lab",
//     headline: "Industry-Ready Programs",
//     sub: "Curriculum aligned with modern industry standards.",
//   },
//   {
//     src: "/graduation-ceremony-with-maroon-gowns-gold-details.jpg",
//     alt: "Graduation Ceremony",
//     headline: "Scholarships & Career Support",
//     sub: "Guiding your journey from classroom to career.",
//   },
// ]

// export function HeroCarousel() {
//   const [index, setIndex] = useState(0)

//   useEffect(() => {
//     const id = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length)
//     }, 5000)
//     return () => clearInterval(id)
//   }, [])

//   return (
//     <section aria-label="Hero" className="relative h-[86vh] w-full overflow-hidden">
//       {/* Overlay */}
//       <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/5" />

//       {/* Slides */}
//       <div className="absolute inset-0">
//         {slides.map((s, i) => (
//           <img
//             key={i}
//             src={s.src || "/placeholder.svg"}
//             alt={s.alt}
//             className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
//           />
//         ))}
//       </div>

//       {/* Text */}
//       <div className="relative z-20 flex h-full items-center justify-center px-4 text-center">
//         <div className="max-w-3xl">
//           <h1 className="animate-fadeInUp font-serif text-4xl font-bold text-white md:text-6xl">
//             {slides[index].headline}
//           </h1>
//           <p className="animate-fadeIn mt-4 text-base text-white/90 md:text-xl">{slides[index].sub}</p>
//           <div className="mt-8 flex items-center justify-center gap-4">
//             <a
//               href="/courses"
//               className="rounded-full bg-[color:var(--secondary)] px-6 py-3 font-semibold text-[color:var(--secondary-foreground)] shadow-lg transition hover:bg-[color:var(--highlight)]"
//             >
//               Explore Courses
//             </a>
//             <a
//               href="/contact"
//               className="rounded-full border border-white/80 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
//             >
//               Get in Touch
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 transform">
//         <div className="flex gap-2">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               aria-label={`Go to slide ${i + 1}`}
//               onClick={() => setIndex(i)}
//               className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-[color:var(--secondary)]" : "bg-white/60 hover:bg-white"}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
