// Professional experience — owner-supplied (2026-11-17 content update).
//
// Only confirmed facts are stored: company, role, and total duration.
// Exact employment dates, responsibilities, promotions, and achievements are
// intentionally omitted until the owner provides them. (The previous static
// portfolio listed different titles and overlapping date ranges; those are not
// used.)
//
// Entry shape:
// {
//   company, position, duration,        // duration e.g. "3+ years" when dates are not given
//   startDate?, endDate?, current?,      // optional; leave out when unknown
//   employmentType?, location?, summary?, responsibilities?: [], technologies?: []
// }

export const experience = [
  {
    company: "CreaTech IT Solutions",
    position: "Frontend Developer",
    duration: "3+ years",
  },
];

// Education — owner-supplied. No years, marks, or awards are stored.
// status: "completed" | "in-progress"
export const education = [
  {
    qualification: "Matriculation",
    institution: "Al-Madina Model School & College",
    location: "Swat",
    status: "completed",
  },
  {
    qualification: "FSc — Computer Science",
    institution: "Jahanzeb College",
    status: "completed",
  },
  {
    qualification: "BS Information Technology (BS IT)",
    status: "in-progress",
  },
];
