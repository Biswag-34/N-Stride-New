export type StepAheadComponentGroup = "Diagnostic Technology" | "Training & Workflow" | "Product Inventory" | "Premium Add-ons";
import { leadCaptureHref } from "@/data/leadCapture";

export type StepAheadPackage = {
  bestFit: string;
  bestFor: string[];
  features: { label: string; value: string }[];
  investment: string;
  name: string;
  tone: "basic" | "premium";
  training: string;
};

export const stepAheadProgram = {
  name: "N-Stride Step-Ahead",
  headline: "Structured Diabetic Foot-Care Partnership Program",
  coreDescription:
    "Step-Ahead is N-Stride's integrated clinic-enablement program that combines diabetic foot-screening technology, practical training, starter inventory and clinic setup support. It enables healthcare providers to establish a structured foot-care and wound-care support service without building each component separately.",
  overview:
    "Step-Ahead is designed to help healthcare providers introduce or strengthen preventive foot care, diabetic foot-risk assessment, wound-care support and clinically guided footwear pathways within their existing practice.",
  cumulativeDescription:
    "The program is cumulative by design: equipment, training, inventory and clinic-support elements are brought together as one implementation package. This creates a practical bridge between patient screening, risk identification, wound-care management, off-loading and protective footwear, and follow-up care.",
  communicationLines: [
    "Advance diabetic foot care. Strengthen your clinic. Empower better outcomes.",
    "A structured foot-care and wound-care setup - technology, training and inventory in one program.",
    "From screening to support: one structured pathway for safer feet.",
    "Build a modern diabetic foot-care service without starting from zero.",
    "Healthy Feet. Better Life.",
  ],
  whyExists:
    "Many clinics identify diabetic patients and chronic wounds but lack a structured foot-care setup, dedicated assessment tools, trained workflow and immediate access to suitable footwear or wound-care support. Step-Ahead addresses this gap through a ready-to-deploy model.",
  clinicGap: [
    "Diabetic patients identified",
    "Chronic wounds seen",
    "No structured foot-care setup",
    "Limited diagnostic tools",
    "No trained workflow",
    "Limited immediate footwear or wound-care support",
  ],
  response: [
    "Coordinated setup",
    "Screening technology",
    "Structured training",
    "Footwear and socks inventory",
    "Wound-care support in Premium",
    "Scalable clinical service model",
  ],
  keyAdvantages: [
    "Coordinated setup for diabetic foot care and wound-care support.",
    "Modern equipment for neuropathy, temperature, vascular-flow and plantar-pressure assessment.",
    "Structured training so the clinical team can use the equipment and follow a consistent workflow.",
    "Initial footwear and socks inventory to connect assessment with practical preventive solutions.",
    "Premium package support for NPWT, Doppler assessment, clinic presentation and branded display.",
    "A scalable service model that can be integrated into an existing chamber, nursing home or hospital.",
  ],
  targetAudience: [
    {
      title: "Independent doctor chambers",
      description: "Add structured diabetic foot screening to your practice.",
    },
    {
      title: "Pharmacy consultation chambers",
      description: "Equip visiting doctor spaces with a practical foot-care model.",
    },
    {
      title: "Nursing homes",
      description: "Support diabetic and elderly patients with better screening and product access.",
    },
    {
      title: "Community healthcare centres",
      description: "Bring preventive foot-risk assessment closer to patients.",
    },
    {
      title: "Hospitals and multispecialty facilities",
      description: "Build a broader diabetic foot-care and wound-care pathway.",
    },
    {
      title: "Clinics adding capability",
      description: "Add off-loading, screening and wound-care capability within your existing setup.",
    },
  ],
  components: [
    {
      group: "Diagnostic Technology" as StepAheadComponentGroup,
      title: "Advanced Foot Scanning",
      description: "Supports structured assessment and documentation of foot condition, loading patterns and care requirements.",
    },
    {
      group: "Diagnostic Technology" as StepAheadComponentGroup,
      title: "VIBRASENSE+T",
      description: "Supports neuropathy and temperature detection, helping identify sensory loss and abnormal temperature-related risk.",
    },
    {
      group: "Diagnostic Technology" as StepAheadComponentGroup,
      title: "VASOSENSE AUTO ABI",
      description: "Measures the Ankle-Brachial Index to support assessment of lower-limb blood flow and vascular risk.",
    },
    {
      group: "Diagnostic Technology" as StepAheadComponentGroup,
      title: "PODOGRAPH_P",
      description: "Provides 2D pressure-point mapping to visualize plantar loading and identify high-pressure areas.",
    },
    {
      group: "Training & Workflow" as StepAheadComponentGroup,
      title: "Clinical Training",
      description:
        "Intensive hands-on training covering equipment use, screening workflow, interpretation, patient guidance and service integration.",
    },
    {
      group: "Product Inventory" as StepAheadComponentGroup,
      title: "Footwear and Socks Inventory",
      description:
        "Provides an initial range of preventive and supportive products, enabling the clinic to move from assessment to immediate patient counselling and product access.",
    },
    {
      group: "Premium Add-ons" as StepAheadComponentGroup,
      title: "Advanced Wound Care - Premium",
      description: "Includes NPWT machines and kits to strengthen wound-care capability for suitable clinical use.",
    },
    {
      group: "Premium Add-ons" as StepAheadComponentGroup,
      title: "Clinic Setup Support - Premium",
      description:
        "Includes orthotics and prosthetics display models and a branded display rack for patient education and professional presentation.",
    },
  ],
  componentImageNeeds: [
    "Placeholder: advanced foot scanning setup",
    "Placeholder: VIBRASENSE+T device",
    "Placeholder: ABI / vascular assessment equipment",
    "Placeholder: podograph pressure mapping",
    "Placeholder: clinic display rack with footwear and socks",
  ],
  workflow: [
    {
      title: "Clinic Assessment",
      purpose: "Understand the provider setting, available space, patient profile and intended service scope.",
    },
    {
      title: "Package Selection",
      purpose: "Choose the Basic or Premium package according to clinical requirements and desired wound-care capability.",
    },
    {
      title: "Equipment and Setup",
      purpose: "Install or hand over the selected screening equipment, inventory and display components.",
    },
    {
      title: "Intensive Training",
      purpose:
        "Train the doctor and/or designated staff in equipment operation, screening sequence, reports, patient counselling and referral or intervention pathways.",
    },
    {
      title: "Patient Screening",
      purpose:
        "Assess neuropathy, temperature variation, vascular status and plantar-pressure distribution as clinically appropriate.",
    },
    {
      title: "Care Pathway",
      purpose:
        "Connect findings to preventive education, footwear or socks, off-loading, wound-care support, referral and follow-up.",
    },
    {
      title: "Ongoing Service Development",
      purpose: "Use the setup to build a consistent diabetic foot-care offering within the clinic or hospital.",
    },
  ],
  packages: [
    {
      name: "Basic Package",
      tone: "basic",
      investment: "₹3.5 lakh",
      training: "2 days intensive training",
      features: [
        { label: "Technology", value: "Advanced foot scanning" },
        { label: "VIBRASENSE+T", value: "Neuropathy and temperature detection" },
        { label: "VASOSENSE AUTO ABI", value: "Ankle-Brachial Index - blood-flow assessment" },
        { label: "PODOGRAPH_P", value: "2D pressure-point mapping" },
        { label: "Inventory", value: "₹1 lakh worth of footwear and socks, supplied at 50% discount on MRP" },
        { label: "Hand-held Doppler", value: "Not included" },
        { label: "Advanced Wound Care", value: "Not included" },
        { label: "Clinic Presentation", value: "Not included" },
        { label: "Furniture", value: "Not included" },
      ],
      bestFit:
        "The Basic Package is suitable for providers who want to establish a focused diabetic foot-screening and preventive foot-care service. It includes the essential screening technology, two days of intensive training and an initial footwear and socks inventory. It is best aligned with doctor chambers, pharmacy consultation chambers and smaller clinics beginning a structured foot-care service.",
      bestFor: [
        "Doctor chambers",
        "Pharmacy consultation chambers",
        "Smaller clinics",
        "Providers starting preventive diabetic foot-care service",
      ],
    },
    {
      name: "Premium Package",
      tone: "premium",
      investment: "₹5 lakh",
      training: "4 days intensive training",
      features: [
        { label: "Technology", value: "Advanced foot scanning" },
        { label: "VIBRASENSE+T", value: "Neuropathy and temperature detection" },
        { label: "VASOSENSE AUTO ABI", value: "Ankle-Brachial Index - blood-flow assessment" },
        { label: "PODOGRAPH_P", value: "2D pressure-point mapping" },
        { label: "Inventory", value: "₹2 lakh worth of footwear and socks, supplied at 50% discount on MRP" },
        { label: "Hand-held Doppler", value: "Included, as required" },
        { label: "Advanced Wound Care", value: "₹1 lakh worth of NPWT machines and kits" },
        { label: "Clinic Presentation", value: "Orthotics and prosthetics models - display only" },
        { label: "Furniture", value: "Branded display rack" },
      ],
      bestFit:
        "The Premium Package is intended for nursing homes, hospitals and clinics seeking a broader foot-care and wound-care setup. In addition to the core diagnostic platform, it provides four days of intensive training, a larger inventory, hand-held Doppler support as required, NPWT machines and kits, orthotics and prosthetics display models, and a branded display rack.",
      bestFor: [
        "Nursing homes",
        "Hospitals",
        "Clinics wanting broader wound-care capability",
        "Facilities needing display and advanced wound-care components",
      ],
    },
  ] satisfies StepAheadPackage[],
  valueProposition: [
    "One coordinated setup instead of multiple disconnected purchases and vendors.",
    "A practical clinical workflow from screening to patient guidance and product or wound-care pathway.",
    "Technology-supported diabetic foot-risk assessment within the provider's existing practice.",
    "Training-led implementation rather than equipment supply alone.",
    "Immediate access to relevant footwear and socks inventory for preventive support.",
    "A professional platform for expanding diabetic foot care, wound care and patient education.",
  ],
  ecosystemConnections: [
    {
      vertical: "Insight",
      description: "Foot screening, checkup and assessment support.",
    },
    {
      vertical: "Kinetics",
      description: "Footwear, socks, insoles and off-loading pathways.",
    },
    {
      vertical: "NPWT VAC & Wound Care",
      description: "Wound-care capability and support.",
    },
    {
      vertical: "Bio-Fit",
      description: "Orthotics, prosthetics and display-based patient education in Premium.",
    },
  ],
  faqs: [
    {
      question: "What is N-Stride Step-Ahead?",
      answer:
        "Step-Ahead is N-Stride's structured diabetic foot-care partnership program. It combines screening technology, training, inventory and setup support to help providers build a coordinated foot-care and wound-care support service.",
    },
    {
      question: "Who is Step-Ahead for?",
      answer:
        "It is designed for doctors, pharmacy consultation chambers, nursing homes, hospitals, multispecialty facilities and clinics that want to add or strengthen diabetic foot screening, off-loading and wound-care capability.",
    },
    {
      question: "What is included in the Basic Package?",
      answer:
        "The Basic Package includes advanced foot scanning, VIBRASENSE+T, VASOSENSE AUTO ABI, PODOGRAPH_P, two days of intensive training and ₹1 lakh worth of footwear and socks supplied at 50% discount on MRP.",
    },
    {
      question: "What is included in the Premium Package?",
      answer:
        "The Premium Package includes the core diagnostic platform, four days of intensive training, ₹2 lakh worth of footwear and socks supplied at 50% discount on MRP, hand-held Doppler as required, ₹1 lakh worth of NPWT machines and kits, orthotics and prosthetics display models and a branded display rack.",
    },
    {
      question: "Does Step-Ahead include training?",
      answer: "Yes. The Basic Package includes 2 days of intensive training and the Premium Package includes 4 days of intensive training.",
    },
    {
      question: "Is NPWT included in both packages?",
      answer: "No. NPWT machines and kits are included in the Premium Package as part of advanced wound-care support.",
    },
    {
      question: "Can the program be customized?",
      answer:
        "Package selection and final setup can be discussed based on the provider setting, available space, patient profile and intended service scope.",
    },
    {
      question: "How do we start?",
      answer:
        "The first step is a clinic assessment or discussion with the N-Stride team to understand your setup, patient profile and desired service scope.",
    },
  ],
  finalBadges: ["Screening", "Training", "Inventory", "Wound Care", "Off-loading", "Follow-up"],
  ctas: {
    primary: { label: "Partner with N-Stride", href: leadCaptureHref({ cta: "discuss_stepahead_partnership", source: "/step-ahead", type: "step-ahead" }) },
    compare: { label: "Compare Packages", href: "#packages" },
    workflow: { label: "Explore Workflow", href: "#workflow" },
    contact: { label: "Contact N-Stride", href: "/contact" },
  },
  seo: {
    title: "N-Stride Step-Ahead | Structured Diabetic Foot-Care Program",
    description:
      "Step-Ahead is N-Stride's clinic-enablement program for doctors, clinics, nursing homes and hospitals, combining diabetic foot-screening technology, practical training, footwear inventory and optional wound-care setup support.",
  },
};
