export const site = {
  name: "Ethan Harianto",
  shortName: "Ethan",
  title: "Ethan Harianto — Founding Engineer",
  description:
    "Founding engineer building products end-to-end — product, systems, and go-to-market. Pear Prime '26. Stanford MS/BS CS '26.",
  url: "https://ethanharianto.com",
  email: "eharianto@stanford.edu",
  location: "San Francisco Bay Area",
  social: {
    github: "https://github.com/ethanharianto",
    linkedin: "https://linkedin.com/in/ethan-harianto",
  },
  resume: "/Ethan_Harianto_Resume.pdf",
  nav: [
    { name: "Work", href: "/work" },
    { name: "Writing", href: "/writing" },
    { name: "Now", href: "/now" },
    { name: "Uses", href: "/uses" },
    { name: "CV", href: "/cv" },
  ],
} as const;

export type SiteConfig = typeof site;
