export const COLORS = {
  dark: {
    bg: "#0D0D1A",
    bgSecondary: "#1A1A2E",
    text: "#F1F1EE",
    textSecondary: "#A1A1AA",
    border: "rgba(255,255,255,0.08)",
    accent: "#0066FF",
    success: "#10B981",
    error: "#EF4444",
    warning: "#F59E0B",
  },
  light: {
    bg: "#F8F8FB",
    bgSecondary: "#FFFFFF",
    text: "#1A1A24",
    textSecondary: "#666680",
    border: "rgba(0,0,0,0.05)",
    accent: "#0066FF",
    success: "#059669",
    error: "#DC2626",
    warning: "#D97706",
  },
};

export const JOB_DATA = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    matchScore: 92,
    salaryMin: 120000,
    salaryMax: 160000,
    description: "Build scalable React applications",
    requirements: ["React", "JavaScript", "GSAP", "Node.js"],
    aiDecision: "Apply",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    matchScore: 78,
    salaryMin: 100000,
    salaryMax: 140000,
    description: "Develop full-stack applications",
    requirements: ["React", "Node.js", "MongoDB", "AWS"],
    aiDecision: "Apply",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignStudio",
    location: "New York, NY",
    matchScore: 45,
    salaryMin: 80000,
    salaryMax: 110000,
    description: "Create beautiful user interfaces",
    requirements: ["Figma", "Design Systems", "CSS"],
    aiDecision: "Skip",
  },
  {
    id: 4,
    title: "Frontend Engineer",
    company: "WebSolutions",
    location: "Austin, TX",
    matchScore: 88,
    salaryMin: 110000,
    salaryMax: 150000,
    description: "Lead frontend development",
    requirements: ["React", "Tailwind CSS", "JavaScript"],
    aiDecision: "Apply",
  },
];

export const STATS = [
  { label: "Applications", value: 24 },
  { label: "Interviews", value: 8 },
  { label: "Offers", value: 2 },
  { label: "Success Rate", value: 92 },
];

export const TRACKER_COLUMNS = [
  { id: "applied", title: "Applied", count: 12 },
  { id: "interview", title: "Interview", count: 5 },
  { id: "rejected", title: "Rejected", count: 3 },
  { id: "offer", title: "Offer", count: 2 },
];
