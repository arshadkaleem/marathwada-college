export interface Course {
  slug: string;
  title: string;
  duration: string;
  category: "Diploma" | "Degree";
  description: string;
  overview: string;
  eligibility: string[];
  admissionProcedure: {
    step: number;
    title: string;
    description: string;
  }[];
  documentsRequired: string[];
  institutesOffering: string[];
  careerOpportunities: {
    roles: string[];
    industries: string[];
    salaryRange?: string;
  };
}

export const courses: Course[] = [
  {
    slug: "advance-diploma-industrial-safety",
    title: "Advance Diploma in Industrial Safety (ADIS)",
    duration: "2 Years",
    category: "Diploma",
    description:
      "A professional program designed to train students and working professionals in occupational health, safety, and environmental management.",
    overview:
      "The Advance Diploma in Industrial Safety is a comprehensive professional program designed to train students and working professionals in occupational health, safety, and environmental management. It prepares candidates for roles such as Safety Officer, HSE Engineer, Fire & Safety Manager, and related industrial positions. The program combines theoretical knowledge with practical training to ensure graduates are industry-ready.",
    eligibility: [
      "Diploma/Degree in Engineering or Technology (any branch)",
      "B.Sc. in Physics/Chemistry/Biology/Environmental Science",
      "ITI with work experience (in some institutes)",
      "Working professionals in safety departments are also eligible",
      "Note: Eligibility may vary slightly by institute or university",
    ],
    admissionProcedure: [
      {
        step: 1,
        title: "Application Form",
        description:
          "Obtain the admission form from the institute's office or official website. Fill out all details carefully: personal info, educational background, and work experience (if any).",
      },
      {
        step: 2,
        title: "Document Submission",
        description:
          "Attach self-attested copies of required documents including mark sheets, certificates, ID proof, and photographs.",
      },
      {
        step: 3,
        title: "Application/Registration Fee",
        description:
          "Pay the prescribed registration fee (₹200-₹1,000 depending on the institute). Payment can be made via online transfer/cash/demand draft.",
      },
      {
        step: 4,
        title: "Merit or Direct Admission",
        description:
          "Most institutes offer direct admission based on eligibility. Some may prepare a merit list based on academic performance or conduct a personal interview.",
      },
      {
        step: 5,
        title: "Admission Confirmation",
        description:
          "Selected candidates receive an admission letter. Pay the course fee (₹15,000-₹50,000) depending on the institution. Submit all required original documents for verification.",
      },
      {
        step: 6,
        title: "Course Commencement",
        description:
          "Attend orientation and classes as per the schedule. Duration is typically 2 years (full-time or part-time). Includes theory + practical + project work + industrial training.",
      },
    ],
    documentsRequired: [
      "Application form",
      "10th, 12th, Diploma/Degree mark sheets",
      "Transfer/Leaving Certificate",
      "ID Proof (Aadhaar/Passport/PAN)",
      "2-4 Passport-size photographs",
      "Experience certificate (if any)",
    ],
    institutesOffering: [
      "Marathwada Institute of Technology and Management (MITM), Umari",
      "National Institute of Fire & Safety Engineering (NIFSE)",
      "Indian Institute of Safety Management (IISM)",
      "Bharathiar University/NILEM/NILLM University",
      "State Technical Boards or Government Polytechnic Colleges",
    ],
    careerOpportunities: {
      roles: [
        "Safety Officer/Supervisor",
        "Fire Safety Officer",
        "HSE Engineer",
        "Environment Health & Safety (EHS) Manager",
        "Risk Assessment Consultant",
      ],
      industries: [
        "Manufacturing",
        "Construction",
        "Oil & Gas",
        "Power Plants",
        "Chemical Industries",
      ],
    },
  },
  {
    slug: "pg-diploma-production-management",
    title: "PG Diploma in Production Management",
    duration: "2 Years",
    category: "Diploma",
    description:
      "A professional program designed to develop managerial and technical skills in production planning, operations management, quality control, and industrial efficiency.",
    overview:
      "The PG Diploma in Production Management is a comprehensive professional program designed to develop managerial and technical skills in production planning, operations management, quality control, and industrial efficiency. It prepares candidates for supervisory and managerial roles in manufacturing and industrial sectors. The program combines theoretical foundations with practical applications.",
    eligibility: [
      "Bachelor's degree in any discipline (preferably in Engineering, Science, or Management) from a recognized university",
      "Minimum 45-50% aggregate marks (varies by institution)",
      "Working professionals in the production or operations field are also eligible in many institutes",
      "Some universities may also accept Diploma holders with work experience",
    ],
    admissionProcedure: [
      {
        step: 1,
        title: "Application Form",
        description:
          "Collect the admission form from the institute's admission office or download it from the official website. Fill in personal, educational, and contact details accurately.",
      },
      {
        step: 2,
        title: "Document Submission",
        description:
          "Attach copies of required documents including 10th & 12th mark sheets, Bachelor's degree certificate, ID proof, photographs, and work experience certificate (if applicable).",
      },
      {
        step: 3,
        title: "Application/Registration Fee",
        description:
          "Pay the registration fee (usually ₹500-₹1,000). Payment methods: Online/UPI/Cash/Demand Draft.",
      },
      {
        step: 4,
        title: "Merit or Entrance Test",
        description:
          "Many institutes grant direct admission based on merit (academic performance). Some reputed institutes or universities may conduct an entrance exam or interview.",
      },
      {
        step: 5,
        title: "Admission Confirmation",
        description:
          "Selected candidates receive an Admission Letter/Offer Letter. Confirm your seat by paying the course fee (typically ₹25,000-₹80,000). Submit all original documents for verification.",
      },
      {
        step: 6,
        title: "Course Commencement",
        description:
          "Classes begin as per the academic calendar. The course duration is generally 2 years, divided into four semesters. Includes theoretical papers, project work, and industrial case studies.",
      },
    ],
    documentsRequired: [
      "Application Form",
      "10th, 12th, and Graduation Mark Sheets",
      "Degree/Provisional Certificate",
      "Transfer/Leaving Certificate",
      "ID Proof (Aadhaar/Passport/PAN)",
      "Passport-size Photos (2-4)",
      "Experience Certificate (if applicable)",
    ],
    institutesOffering: [
      "Marathwada Institute of Technology and Management (MITM), Umari",
      "National Institute of Management & Technology (NIMT)",
      "IGNOU (Indira Gandhi National Open University)",
      "NIILM University/NILEM/Bharathiar University",
      "Symbiosis Centre for Distance Learning (SCDL)",
      "IMT CDL Ghaziabad",
      "Regional Polytechnics and Technical Board",
    ],
    careerOpportunities: {
      roles: [
        "Production Manager",
        "Operations Manager",
        "Manufacturing Supervisor",
        "Quality Control Manager",
        "Process Improvement Specialist",
        "Industrial Engineer",
      ],
      industries: [
        "Manufacturing",
        "Automobile",
        "Textile",
        "Pharmaceuticals",
        "Electronics",
        "Process Industries",
      ],
    },
  },
  {
    slug: "pg-diploma-environmental-engineering",
    title: "PG Diploma in Environmental Engineering",
    duration: "2 Years",
    category: "Diploma",
    description:
      "A specialized program focusing on environmental protection, pollution control, waste management, and sustainable development practices.",
    overview:
      "The PG Diploma in Environmental Engineering is a specialized program that focuses on environmental protection, pollution control, waste management, and sustainable development practices. The program prepares candidates for roles in environmental consulting, regulatory compliance, and sustainable technology implementation across various industries.",
    eligibility: [
      "Bachelor's degree in Engineering (Civil, Chemical, Environmental) or Science (Chemistry, Biology, Environmental Science)",
      "Minimum 50% aggregate marks in graduation",
      "Working professionals in environmental sector are preferred",
      "Basic knowledge of environmental concepts is advantageous",
    ],
    admissionProcedure: [
      {
        step: 1,
        title: "Application Form",
        description:
          "Download application form from institute website or collect from admission office. Fill all sections completely with accurate information.",
      },
      {
        step: 2,
        title: "Document Submission",
        description:
          "Submit self-attested copies of all educational documents, degree certificates, and experience certificates along with recent photographs.",
      },
      {
        step: 3,
        title: "Registration Fee Payment",
        description:
          "Pay registration fee (₹500-₹1,500) through online payment, demand draft, or cash payment at institute.",
      },
      {
        step: 4,
        title: "Merit Assessment",
        description:
          "Admission based on academic merit and relevant work experience. Some institutes may conduct personal interviews.",
      },
      {
        step: 5,
        title: "Seat Confirmation",
        description:
          "Pay course fee (₹30,000-₹75,000) upon selection. Submit original documents for verification and receive admission confirmation.",
      },
      {
        step: 6,
        title: "Program Commencement",
        description:
          "Attend orientation program and commence classes. Course includes theoretical subjects, practical work, field visits, and project work.",
      },
    ],
    documentsRequired: [
      "Completed Application Form",
      "10th & 12th Mark Sheets and Certificates",
      "Bachelor's Degree Mark Sheets and Certificate",
      "Migration/Transfer Certificate",
      "Caste Certificate (if applicable)",
      "Work Experience Certificate (if any)",
      "Recent Passport Size Photographs",
      "Aadhaar Card/PAN Card copy",
    ],
    institutesOffering: [
      "Marathwada Institute of Technology and Management (MITM), Umari",
      "Indian Institute of Technology (Various campuses)",
      "National Environmental Engineering Research Institute (NEERI)",
      "Centre for Environmental Planning and Technology (CEPT)",
      "Bharathiar University",
      "Various State Technical Universities",
    ],
    careerOpportunities: {
      roles: [
        "Environmental Engineer",
        "Pollution Control Officer",
        "Environmental Consultant",
        "Waste Management Specialist",
        "Environmental Impact Assessment Specialist",
        "Sustainability Manager",
      ],
      industries: [
        "Environmental Consulting Firms",
        "Government Environmental Departments",
        "Manufacturing Industries",
        "Power Plants",
        "Chemical Industries",
        "Water Treatment Plants",
      ],
      salaryRange: "₹3.5-8 LPA (Freshers), ₹8-20 LPA (Experienced)",
    },
  },
  {
    slug: "be-computer-science",
    title: "B.E. in Computer Science",
    duration: "4 Years",
    category: "Degree",
    description:
      "A comprehensive undergraduate program focusing on computer systems, software development, algorithms, and emerging technologies like AI and cybersecurity.",
    overview:
      "B.E. in Computer Science is a 4-year undergraduate degree program that provides comprehensive knowledge of computer systems, software development, programming languages, algorithms, and emerging technologies. The program combines theoretical foundations with practical applications, preparing students for careers in software development, system design, and technology innovation.",
    eligibility: [
      "Passed 12th (HSC) with Physics, Chemistry, and Mathematics (PCM)",
      "Minimum 50% aggregate marks (45% for reserved categories)",
      "Qualifying score in entrance exams like JEE Main, State CET, or Institute-specific tests",
      "Age limit: 17-23 years at the time of admission",
    ],
    admissionProcedure: [
      {
        step: 1,
        title: "Entrance Exam Registration",
        description:
          "Register for JEE Main, State CET (like MHT-CET, KCET), or university-specific entrance exams. Some institutes offer direct admission based on 12th marks.",
      },
      {
        step: 2,
        title: "Application Submission",
        description:
          "Apply online through official exam portals or university websites. Upload required documents and pay application fee (₹500-₹2,000).",
      },
      {
        step: 3,
        title: "Entrance Examination",
        description:
          "Appear for entrance exam covering Physics, Chemistry, and Mathematics. Performance determines eligibility for counseling process.",
      },
      {
        step: 4,
        title: "Counseling Process",
        description:
          "Participate in counseling based on exam rank. Select Computer Science branch and preferred colleges according to availability and preference.",
      },
      {
        step: 5,
        title: "Seat Allotment & Admission",
        description:
          "Receive seat allotment based on merit and preferences. Visit allotted college for document verification and fee payment.",
      },
      {
        step: 6,
        title: "Course Commencement",
        description:
          "Complete admission formalities and begin classes. The 4-year program is divided into 8 semesters with theory, practicals, and project work.",
      },
    ],
    documentsRequired: [
      "10th & 12th Mark Sheets and Certificates",
      "Entrance Exam Score Card/Rank Card",
      "Transfer Certificate from 12th School",
      "Migration Certificate (if applicable)",
      "Domicile Certificate (for state quota)",
      "Caste/Category Certificate (if applicable)",
      "Aadhaar Card and PAN Card",
      "Recent Passport Size Photographs",
      "Income Certificate (for fee concessions)",
    ],
    institutesOffering: [
      "Marathwada Institute of Technology and Management (MITM), Umari",
      "Indian Institutes of Technology (IITs)",
      "National Institutes of Technology (NITs)",
      "Government Engineering Colleges",
      "Private Engineering Colleges",
      "Deemed Universities",
    ],
    careerOpportunities: {
      roles: [
        "Software Developer/Engineer",
        "Web Developer/Full Stack Developer",
        "Mobile Application Developer",
        "Data Scientist/Analyst",
        "Cybersecurity Specialist",
        "AI/Machine Learning Engineer",
        "Systems Administrator",
        "Database Administrator",
        "Network Engineer",
        "Technical Consultant",
      ],
      industries: [
        "Information Technology",
        "Software Development",
        "E-commerce",
        "Banking and Finance",
        "Healthcare Technology",
        "Gaming and Entertainment",
        "Telecommunications",
        "Government IT Services",
      ],
      salaryRange: "₹3-8 LPA (Freshers), ₹10-25+ LPA (Experienced)",
    },
  },
  {
    slug: "be-production-engineering",
    title: "B.E. in Production Engineering",
    duration: "4 Years",
    category: "Degree",
    description:
      "A comprehensive program focusing on manufacturing processes, industrial engineering, quality control, and production management for efficient industrial operations.",
    overview:
      "B.E. in Production Engineering is a 4-year undergraduate degree program focused on the design, manufacturing, and management of industrial production processes. It combines mechanical engineering, manufacturing technology, industrial management, and quality control to improve productivity and efficiency in industries. The program prepares students for leadership roles in manufacturing and industrial sectors.",
    eligibility: [
      "Passed 10+2 (HSC) with Physics, Chemistry, and Mathematics (PCM) as core subjects",
      "Minimum 45-50% aggregate marks (40% for reserved category students)",
      "Alternative: Completed Diploma in Engineering (any branch) for lateral entry (Direct 2nd Year Admission)",
      "Age limit: Minimum 17 years at the time of admission",
    ],
    admissionProcedure: [
      {
        step: 1,
        title: "Entrance Exam Registration",
        description:
          "Register for State-level exams (MHT-CET, KCET, TNEA, WBJEE) or National-level exams (JEE Main) or University-specific tests (VITEEE, SRMJEEE, BITSAT).",
      },
      {
        step: 2,
        title: "Application Form Submission",
        description:
          "Apply online through exam or university portal. Upload required details and documents. Pay application fee (₹500-₹1,500).",
      },
      {
        step: 3,
        title: "Entrance Examination",
        description:
          "Appear for entrance exam as per schedule. The test covers Physics, Chemistry, and Mathematics (PCM). Rank/score determines counseling eligibility.",
      },
      {
        step: 4,
        title: "Counseling & Seat Allotment",
        description:
          "Participate in state or national counseling (CAP rounds for MHT-CET, JoSAA for JEE). Select Production Engineering branch and preferred colleges.",
      },
      {
        step: 5,
        title: "Admission Confirmation",
        description:
          "Visit allotted college with documents for verification. Pay admission/tuition fees (₹50,000-₹1,50,000 per year) and receive confirmation letter.",
      },
      {
        step: 6,
        title: "Course Commencement",
        description:
          "Begin 4-year program (8 semesters) including Manufacturing Processes, Industrial Engineering, CAD/CAM, Quality Assurance, and Robotics & Automation.",
      },
    ],
    documentsRequired: [
      "10th & 12th Mark Sheets and Certificates",
      "Entrance Exam Score Card",
      "Transfer/Leaving Certificate",
      "Birth Certificate",
      "Domicile Certificate (for state quota)",
      "Passport-size Photographs",
      "ID Proof (Aadhaar/PAN/Passport)",
      "Caste/Category Certificate (if applicable)",
      "Diploma Mark Sheets (for lateral entry)",
    ],
    institutesOffering: [
      "Marathwada Institute of Technology and Management (MITM), Umari",
      "College of Engineering, Pune (COEP)",
      "VJTI, Mumbai",
      "MIT World Peace University, Pune",
      "Anna University, Chennai",
      "NIT Tiruchirappalli/NIT Surat",
      "BMS College of Engineering, Bangalore",
      "Government Polytechnic & Engineering Colleges across India",
    ],
    careerOpportunities: {
      roles: [
        "Production Engineer",
        "Manufacturing Supervisor",
        "Quality Control Engineer",
        "Maintenance Engineer",
        "Operations Analyst",
        "Industrial Engineer",
        "Process Improvement Specialist",
        "Plant Manager",
      ],
      industries: [
        "Manufacturing & Process Industries",
        "Automobile & Aerospace",
        "Power & Energy Sector",
        "Quality & Maintenance Departments",
        "Production Planning & Control Units",
      ],
      salaryRange: "₹3.5-7 LPA (Freshers), ₹8-18 LPA (Experienced)",
    },
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

// export type Course = {
//   slug: string
//   title: string
//   category: "Diploma" | "Degree"
//   duration: string
//   code?: string
//   description?: string
// }

// export const courses: Course[] = [
//   // Diploma Courses
//   {
//     slug: "advance-diploma-in-industrial-safety-adis-02-year",
//     title: "Advance Diploma in Industrial Safety (ADIS)",
//     category: "Diploma",
//     duration: "02 Year",
//     description:
//       "Comprehensive program focused on workplace safety regulations, hazard identification, and preventive systems across industries.",
//   },
//   {
//     slug: "pg-diploma-in-production-management-02-year",
//     title: "PG Diploma in Production Management",
//     category: "Diploma",
//     duration: "02 Year",
//     description:
//       "Covers lean manufacturing, operations planning, supply chain basics, and quality control for efficient production systems.",
//   },
//   {
//     slug: "pg-diploma-in-environmental-engineering-02-year",
//     title: "PG Diploma in Environmental Engineering",
//     category: "Diploma",
//     duration: "02 Year",
//     description: "Focus on environmental impact assessment, waste management, and sustainable engineering practices.",
//   },
//   {
//     slug: "pg-diploma-in-industrial-safety-adis-02-year",
//     title: "P G Diploma in Industrial Safety (ADIS)",
//     category: "Diploma",
//     duration: "02 Year",
//     description:
//       "Advanced safety curriculum emphasizing risk mitigation, compliance, audits, and emergency response planning.",
//   },

//   // Degree
//   {
//     slug: "be-computer-science",
//     title: "B.E. in Computer Science",
//     category: "Degree",
//     duration: "4 Years",
//     description:
//       "Core CS foundation with modern tracks in AI/ML, data structures, systems, and full-stack development.",
//   },
//   {
//     slug: "be-production-engineering",
//     title: "B.E. in Production Engineering",
//     category: "Degree",
//     duration: "4 Years",
//     description: "Production systems, industrial engineering, automation basics, and operations optimization.",
//   },
// ]

// export function getCourseBySlug(slug: string) {
//   return courses.find((c) => c.slug === slug)
// }
