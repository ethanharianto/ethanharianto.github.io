export const site = {
  name: "Ethan Harianto",
  shortName: "Ethan",
  title: "Ethan Harianto — Stanford CS '26",
  description: "Stanford CS '26. Software engineer.",
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
