import type { Vertical } from "@/data/types";
import { leadCaptureHref } from "@/data/leadCapture";

export type { Vertical } from "@/data/types";

export const verticals = [
  {
    id: "kinetics",
    name: "N-Stride Kinetics",
    shortName: "Kinetics",
    theme: "kinetics",
    tagline: "Therapeutic footwear and care solutions built for safer, supported movement.",
    shortDescription:
      "Therapeutic footwear, diabetic footwear, socks, insoles and lower-limb support solutions for everyday protection.",
    longDescription:
      "N-Stride Kinetics focuses on protection, support and comfort through therapeutic footwear and lower-limb care products. It is designed for people who need more considered footwear choices, including diabetic footwear, custom footwear, off-loading footwear, socks, insoles and foot-care accessories. Recommendations should always be guided by individual need, risk level and professional assessment where appropriate.",
    audience: [
      "People managing diabetic foot risk",
      "Individuals needing therapeutic footwear",
      "Patients advised to use off-loading footwear",
      "People looking for custom footwear or insole support",
      "Care teams supporting foot protection and pressure management",
    ],
    services: [
      "Therapeutic footwear",
      "Diabetic footwear",
      "Custom footwear",
      "Off-loading footwear",
      "Diabetic socks",
      "Compression socks",
      "Gel socks",
      "Toe alignment socks",
      "Sports insoles",
      "Orthotic insoles",
      "Heel cups",
      "Arch support insoles",
      "Foot-care accessories",
      "Lower-limb support accessories",
    ],
    process: [
      {
        title: "Understand the need",
        description:
          "Review the user's comfort concerns, medical context, activity level and footwear requirements.",
      },
      {
        title: "Assess fit and pressure priorities",
        description:
          "Identify support, cushioning, alignment or off-loading needs before recommending a solution path.",
      },
      {
        title: "Recommend suitable protection",
        description:
          "Match footwear, socks, insoles or accessories to the person's care goal and usage environment.",
      },
      {
        title: "Support continued use",
        description:
          "Guide product usage, follow-up and replacement decisions when needs change over time.",
      },
    ],
    proofPoints: [
      "Broad therapeutic product depth across footwear, socks, insoles and accessories",
      "Connected with diagnostic and consultation pathways through the wider N-Stride ecosystem",
      "Built for protection, support and everyday usability rather than generic footwear selection",
    ],
    technologyPoints: [
      "Footwear and insole customization pathways",
      "Off-loading product options for pressure-sensitive use cases",
      "Material and fit considerations for diabetic and therapeutic footwear needs",
    ],
    relatedProducts: [
      "Diabetic Footwear",
      "Custom Footwear",
      "Off-Loading Footwear",
      "Therapeutic Socks",
      "Insoles & Inserts",
    ],
    imageNeeds: [
      "Premium therapeutic footwear arranged on a clinical white surface",
      "Close-up of diabetic footwear construction and soft interior details",
      "Insoles, socks and foot-care accessories shown as a care kit",
      "Patient footwear fitting or consultation moment",
    ],
    cta: {
      primary: { label: "Book Foot Checkup", href: leadCaptureHref({ cta: "book_foot_checkup", source: "/verticals/kinetics", type: "foot-checkup" }) },
      secondary: { label: "Visit N-Stride Shop", href: "https://nstride.shop", external: true },
    },
    seo: {
      title: "N-Stride Kinetics | Therapeutic Footwear & Foot-Care Solutions",
      description:
        "Explore N-Stride Kinetics for therapeutic footwear, diabetic footwear, custom footwear, off-loading footwear, socks, insoles and foot-care accessories.",
    },
    eyebrow: "Footwear",
    title: "Therapeutic and custom footwear",
    description:
      "Therapeutic footwear, diabetic footwear, off-loading options, socks, insoles and foot-care accessories.",
    href: "/verticals/kinetics",
    icon: "footwear",
  },
  {
    id: "insight",
    name: "N-Stride Insight",
    shortName: "Insight",
    theme: "insight",
    tagline: "Advanced foot checkup, diagnostic support and doctor-led consultation.",
    shortDescription:
      "Foot checkups, doctor consultation, home foot scan support and personalized care recommendations.",
    longDescription:
      "N-Stride Insight is the diagnostic and consultation layer of the ecosystem. It helps people better understand foot health, pressure concerns, gait and balance observations, diabetic foot risk and appropriate care direction. The goal is to support informed next steps, not to replace medical diagnosis or emergency care.",
    audience: [
      "People with diabetic foot-care concerns",
      "Individuals seeking preventive foot screening",
      "Patients needing footwear or insole recommendations",
      "Caregivers supporting older adults or mobility-limited patients",
      "Doctors and clinics needing structured foot-checkup support",
    ],
    services: [
      "Full foot checkup",
      "Doctor consultation",
      "Online appointment",
      "Doctor visit",
      "Home foot scan",
      "Foot pressure assessment",
      "Gait and balance observation",
      "Diabetic foot risk screening",
      "Personalized footwear or care recommendation",
    ],
    process: [
      {
        title: "Schedule the consultation",
        description:
          "Begin through an online appointment, doctor visit request or home foot scan enquiry.",
      },
      {
        title: "Review foot and mobility context",
        description:
          "Capture symptoms, medical history, footwear usage and current support needs.",
      },
      {
        title: "Assess pressure and movement indicators",
        description:
          "Use observation and assessment inputs to understand risk, comfort and support priorities.",
      },
      {
        title: "Recommend the next care path",
        description:
          "Connect the person to footwear, wound-care, Bio-Fit or clinical follow-up pathways as needed.",
      },
    ],
    proofPoints: [
      "Structured pathway from assessment to recommendation",
      "Designed to connect product choices with care needs",
      "Supports in-clinic, online and home-led appointment models",
    ],
    technologyPoints: [
      "Home foot scan workflow",
      "Foot pressure assessment support",
      "Gait and balance observation inputs",
      "Digital appointment and consultation pathway",
    ],
    relatedProducts: [
      "Custom Footwear",
      "Insoles & Inserts",
      "Diabetic Footwear",
      "Off-Loading Footwear",
    ],
    imageNeeds: [
      "Doctor-led foot checkup in a clean consultation environment",
      "Foot scan or pressure assessment visual",
      "Patient consultation with footwear recommendation materials",
      "Clinical diagnostic tools on an ice-blue surface",
    ],
    cta: {
      primary: { label: "Book Foot Checkup", href: leadCaptureHref({ cta: "book_foot_checkup", source: "/verticals/insight", type: "foot-checkup" }) },
      secondary: { label: "Explore Care Verticals", href: "/verticals" },
    },
    seo: {
      title: "N-Stride Insight | Foot Checkup, Home Foot Scan & Consultation",
      description:
        "N-Stride Insight supports full foot checkups, doctor consultation, online appointments, home foot scans, pressure assessment and diabetic foot risk screening.",
    },
    eyebrow: "Diagnostics",
    title: "Full foot checkups and advanced diagnostics",
    description:
      "Foot checkups, doctor consultation, home foot scan and diagnostic support for informed care planning.",
    href: "/verticals/insight",
    icon: "diagnostics",
  },
  {
    id: "wound-care",
    name: "N-Stride NPWT VAC & Wound Care",
    shortName: "Wound Care",
    theme: "woundCare",
    tagline: "Modern wound-care strategy for complex foot and lower-limb wounds.",
    shortDescription:
      "NPWT VAC dressing support, diabetic wound support and modern wound-care planning for complex cases.",
    longDescription:
      "N-Stride NPWT VAC & Wound Care supports structured care planning for complex foot and lower-limb wounds. The vertical focuses on NPWT VAC dressing support, wound-care strategy, off-loading guidance and follow-up coordination. Wound care is medical in nature, so decisions should be guided by qualified clinicians and the patient's condition.",
    audience: [
      "Patients with diabetic foot wounds",
      "People recovering from foot or lower-limb procedures",
      "Clinics managing complex wound-care pathways",
      "Hospitals and nursing facilities supporting dressing follow-up",
      "Care teams needing off-loading guidance for wound protection",
    ],
    services: [
      "NPWT VAC dressing",
      "Modern wound-care strategy",
      "Diabetic wound support",
      "Complex foot wound management",
      "Post-surgical wound-care support",
      "Dressing planning and follow-up",
      "Off-loading guidance for wound protection",
      "Healing-focused care pathway",
    ],
    process: [
      {
        title: "Review wound-care context",
        description:
          "Understand the wound type, clinical guidance, patient mobility and dressing support needs.",
      },
      {
        title: "Plan the support pathway",
        description:
          "Coordinate NPWT VAC dressing requirements, follow-up cadence and off-loading considerations.",
      },
      {
        title: "Support dressing and protection",
        description:
          "Assist with wound-care support services while aligning with clinician-led treatment direction.",
      },
      {
        title: "Track and adjust care needs",
        description:
          "Help care teams adapt product support, off-loading and follow-up based on clinical progress.",
      },
    ],
    proofPoints: [
      "Dedicated NPWT VAC and wound-care support within the N-Stride ecosystem",
      "Connected to off-loading footwear and protection pathways",
      "Designed for collaboration with doctors, hospitals and nursing facilities",
    ],
    technologyPoints: [
      "NPWT VAC dressing support",
      "Dressing planning and follow-up workflow",
      "Off-loading coordination for pressure-sensitive wounds",
      "Care-pathway documentation and patient education support",
    ],
    relatedProducts: [
      "NPWT VAC Support",
      "Off-Loading Footwear",
      "Therapeutic Socks",
      "Insoles & Inserts",
    ],
    imageNeeds: [
      "Clinical wound-care consultation scene without graphic wound imagery",
      "NPWT VAC device and dressing supplies arranged professionally",
      "Care team reviewing wound-care plan in a medical setting",
      "Off-loading footwear shown as part of wound protection planning",
    ],
    cta: {
      primary: { label: "Request Wound Care Support", href: leadCaptureHref({ cta: "request_wound_care_support", source: "/verticals/wound-care", type: "wound-care" }) },
      secondary: { label: "Partner with Step-Ahead", href: leadCaptureHref({ cta: "discuss_stepahead_partnership", source: "/verticals/wound-care", type: "step-ahead" }) },
    },
    seo: {
      title: "N-Stride NPWT VAC & Wound Care | Modern Wound-Care Support",
      description:
        "N-Stride supports NPWT VAC dressing, diabetic wound support, complex foot wound management, dressing planning and off-loading guidance.",
    },
    eyebrow: "Wound Care",
    title: "NPWT VAC and modern wound care",
    description:
      "NPWT VAC dressing support, diabetic wound-care support and care-pathway planning for complex wounds.",
    href: "/verticals/wound-care",
    icon: "wound-care",
  },
  {
    id: "bio-fit",
    name: "N-Stride Bio-Fit",
    shortName: "Bio-Fit",
    theme: "bioFit",
    tagline: "Prosthetics, orthotics and silicone restoration designed around mobility and confidence.",
    shortDescription:
      "Prosthetics, orthotics, mobility supports and silicone cosmetic restoration for patient-specific needs.",
    longDescription:
      "N-Stride Bio-Fit supports people who need prosthetic, orthotic or silicone restoration solutions. The vertical brings together assessment, fitting, adaptation guidance and rehabilitation support direction with a focus on function, comfort, confidence and appropriate clinical collaboration.",
    audience: [
      "People needing prosthetic or orthotic support",
      "Patients requiring braces or functional mobility devices",
      "Individuals exploring silicone cosmetic restoration",
      "Rehabilitation teams supporting lower-limb adaptation",
      "Caregivers assisting mobility restoration journeys",
    ],
    services: [
      "Prosthetics",
      "Orthotics",
      "Silicone cosmetic restoration",
      "Custom prosthetic fitting",
      "Orthotic braces and supports",
      "Functional mobility devices",
      "Patient-specific adaptation",
      "Rehabilitation support guidance",
    ],
    process: [
      {
        title: "Assess mobility goals",
        description:
          "Understand the user's functional needs, lifestyle context and clinical recommendations.",
      },
      {
        title: "Plan the fitting pathway",
        description:
          "Identify prosthetic, orthotic or silicone restoration requirements and adaptation priorities.",
      },
      {
        title: "Fit and refine",
        description:
          "Support custom fitting, comfort checks and practical usage guidance through the care journey.",
      },
      {
        title: "Guide rehabilitation support",
        description:
          "Coordinate education and follow-up direction as mobility and confidence improve over time.",
      },
    ],
    proofPoints: [
      "Dedicated prosthetics, orthotics and silicone restoration vertical",
      "Patient-specific approach to fit, function and adaptation",
      "Connected to broader foot and lower-limb care pathways",
    ],
    technologyPoints: [
      "Custom prosthetic fitting workflows",
      "Orthotic brace and support solutions",
      "Silicone cosmetic restoration planning",
      "Functional mobility device selection and adaptation support",
    ],
    relatedProducts: [
      "Prosthetics & Orthotics",
      "Silicone Cosmetic Restoration",
      "Insoles & Inserts",
    ],
    imageNeeds: [
      "Prosthetic and orthotic fitting consultation in a premium clinical setting",
      "Close-up of orthotic brace or mobility support detail",
      "Silicone restoration material or process visual without sensitive imagery",
      "Patient walking support or rehabilitation guidance scene",
    ],
    cta: {
      primary: { label: "Request Bio-Fit Consultation", href: leadCaptureHref({ cta: "request_biofit_consultation", source: "/verticals/bio-fit", type: "bio-fit" }) },
      secondary: { label: "Explore Care Verticals", href: "/verticals" },
    },
    seo: {
      title: "N-Stride Bio-Fit | Prosthetics, Orthotics & Silicone Restoration",
      description:
        "N-Stride Bio-Fit supports prosthetics, orthotics, silicone cosmetic restoration, custom fitting, mobility devices and rehabilitation guidance.",
    },
    eyebrow: "Mobility",
    title: "Prosthetics, orthotics and restoration",
    description:
      "Prosthetics, orthotics, silicone cosmetic restoration and patient-specific mobility support.",
    href: "/verticals/bio-fit",
    icon: "prosthetics",
  },
] satisfies Vertical[];
