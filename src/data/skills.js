// Source: CONTENT.md §6. No proficiency percentages.
// `status: "learning"` marks technologies that must not be presented as
// established skills. The owner still needs to confirm each capability
// before publication (CONTENT.md §6, final note).

export const skillCategories = [
  {
    id: "core",
    title: "Core Web Technologies",
    icon: "code",
    skills: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "layout",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
    ],
  },
  {
    id: "motion",
    title: "UI & Motion",
    icon: "sparkles",
    skills: [
      { name: "Responsive UI Development" },
      { name: "UI Implementation" },
      { name: "Animation and Interaction Development" },
      { name: "GSAP", status: "learning", statusLabel: "Learning / practicing" },
      { name: "Motion", status: "learning", statusLabel: "Learning / practicing" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "server",
    skills: [{ name: "Node.js", status: "learning", statusLabel: "Currently learning" }],
  },
  {
    id: "practices",
    title: "Development Practices",
    icon: "git",
    skills: [
      { name: "Component-Based Architecture" },
      { name: "Reusable Components" },
      { name: "Responsive Design" },
      { name: "API Integration" },
      { name: "Application Structure" },
      { name: "Performance Optimization" },
      { name: "Git and Version Control" },
    ],
  },
];
