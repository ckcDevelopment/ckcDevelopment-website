export const site = {
  name: "CKC Development",
  shortName: "CKC",
  domain: "ckcDevelopment.com",
  url: "https://ckcdevelopment.com",
  email: "hello@ckcdevelopment.com",
  tagline: "Software you own. Infrastructure you keep.",
  description:
    "CKC Development creates custom software and designs and manages IT infrastructure for in-house management and ownership.",
} as const;

export const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/#why", label: "Why CKC" },
  { href: "/#contact", label: "Contact" },
] as const;

export const principles = [
  "Clarity",
  "Durability",
  "Transferability",
  "Stewardship",
  "In-house ownership",
  "Custom architecture",
  "Day-two operations",
  "Software + infrastructure",
] as const;

export const services = [
  {
    id: "engineering",
    index: "01",
    title: "Software Engineering and Development",
    summary:
      "Production software designed, built, and evolved with the discipline of an in-house team — because that is who it is for.",
    detail:
      "We partner on greenfield products, platform work, and modernization. Delivery is transparent: source, docs, and decisions stay with you. The engineering practice is built so your people can extend it after we step back.",
    keep: "Code, pipelines, and the context to change them.",
    capabilities: [
      "Product engineering",
      "APIs & integrations",
      "Quality & delivery",
      "Modernization",
    ],
  },
  {
    id: "solutions",
    index: "02",
    title: "Custom Software Solutions, Infrastructure and Management",
    summary:
      "The application, the environment it lives in, and the operating model to keep it yours — not a black box with a login.",
    detail:
      "Some problems are not a single codebase. We design the solution as a system: software, runtime, identity, data, and how it is managed. You get a stack you can staff, observe, and eventually run without us in the middle.",
    keep: "A complete operating picture, not a rented product.",
    capabilities: [
      "End-to-end platforms",
      "Environment design",
      "Managed handover",
      "Internal tooling",
    ],
  },
  {
    id: "architecture",
    index: "03",
    title: "Custom Architecture Design and Management",
    summary:
      "Technical architecture you can reason about, govern, and grow — drawn for the operators who will live with it.",
    detail:
      "We map boundaries, data flows, failure modes, and the path from now to next. Architecture is treated as a managed artifact: diagrams, ADRs, and a cadence for change so the design does not evaporate after the first release.",
    keep: "A living architecture your team can defend.",
    capabilities: [
      "System design",
      "Integration maps",
      "Governance",
      "Evolution plans",
    ],
  },
  {
    id: "it",
    index: "04",
    title: "Information Technology Implementation and Management",
    summary:
      "Identity, networks, cloud or on-prem, observability, and day-two operations — implemented with a path to internal ownership.",
    detail:
      "IT is not an afterthought bolted onto a demo. We implement and, when useful, manage the environment while your team ramps. Runbooks, access, and monitoring are first-class so operations can move in-house on a timeline you choose.",
    keep: "An environment your staff can actually run.",
    capabilities: [
      "Identity & access",
      "Cloud / on-prem",
      "Observability",
      "Day-two ops",
    ],
  },
] as const;

export const offering = {
  title: "Custom software, plus infrastructure you own",
  body: "The broader offering is one practice: we create custom software, and we design and manage IT infrastructure for in-house management and ownership. You are not choosing between an app vendor and an MSP. You are building a capability that stays on your side of the table.",
  points: [
    {
      title: "Build",
      text: "Software shaped around how you actually work — not a generic product with your logo on it.",
    },
    {
      title: "Ground",
      text: "Infrastructure and architecture designed so the system can be hosted, observed, and staffed internally.",
    },
    {
      title: "Transfer",
      text: "Management with an exit ramp: documentation, pairing, and operating cadence until it is yours.",
    },
  ],
} as const;

export const approach = [
  {
    index: "01",
    title: "Discover how you operate",
    text: "We start with the people who will own the system: constraints, risk, existing tools, and what “in-house” actually means for your team. The brief is the operating reality, not a feature list in isolation.",
  },
  {
    index: "02",
    title: "Design for ownership",
    text: "Architecture, environments, and interfaces are drawn so they can be explained in a room without us. Boundaries are explicit. Secrets, source, and decision records are set up as yours from day one.",
  },
  {
    index: "03",
    title: "Build in the open",
    text: "Work ships in repositories you control, with reviews your engineers can join. Infrastructure is coded and documented, not hidden behind a dashboard only we can see.",
  },
  {
    index: "04",
    title: "Manage, then hand over",
    text: "We can implement and manage while your team ramps. Transfer is planned: runbooks, pairing, observability, and a cadence that continues after CKC is no longer on the critical path.",
  },
] as const;

export const differentiators = [
  {
    title: "You own the work product",
    text: "Source, infrastructure definitions, architecture records, and operational knowledge are delivered to you. We are not a platform you rent forever.",
  },
  {
    title: "Software and infrastructure, together",
    text: "Application engineering and IT implementation sit in one conversation. That is how systems actually fail — and how they stay runnable.",
  },
  {
    title: "Designed for your operators",
    text: "Identity, environments, and runbooks are built for the people who will be paged, not for a demo. If your team cannot run it, it is not done.",
  },
  {
    title: "Partnership with an exit ramp",
    text: "We will implement and manage. We will also leave. The engagement is successful when your in-house capability is stronger than when we arrived.",
  },
] as const;

export const contactNeeds = [
  { value: "engineering", label: "Software engineering and development" },
  { value: "solutions", label: "Custom software, infrastructure, and management" },
  { value: "architecture", label: "Architecture design and management" },
  { value: "it", label: "IT implementation and management" },
  { value: "explore", label: "Not sure yet — want a conversation" },
] as const;
