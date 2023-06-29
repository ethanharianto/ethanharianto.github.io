/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ethan Harianto's Portfolio",
  description:
    "An eager individual who thrives on tackling new challenges and continually expanding my knowledge across various areas of CS, allowing me to adapt and contribute effectively to projects that create a positive impact.",
  og: {
    title: "Ethan Harianto Portfolio",
    type: "website",
    url: "http://ethanharianto.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Ethan Harianto",
  logo_name: "EthanHarianto",
  subTitle:
    "An eager individual who thrives on tackling new challenges and continually expanding my knowledge across various areas of CS, allowing me to adapt and contribute effectively to projects that create a positive impact.",
  resumeLink:
    "https://drive.google.com/file/d/1IGooBEw5Ea0mU68HhPoPY50O6aOMl4VE/view?usp=sharing",
  githubProfile: "https://github.com/ethanharianto",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ethanharianto",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ethan-harianto/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Outlook",
    link: "mailto:ethanhhr@stanford.edu",
    fontAwesomeIcon: "fa-microsoft", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#0072C6", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "🟣 Learning responsive website front-end using the React-Redux stack",
        "🟣 Developing mobile applications using Swift and Firebase",
        "🟣 Exploring application back-end processes with NodeJS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "logos:swift",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     // {
    //     //   skillName: "GCP",
    //     //   fontAwesomeClassname: "simple-icons:googlecloud",
    //     //   style: {
    //     //     color: "#4285F4",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "AWS",
    //     //   fontAwesomeClassname: "simple-icons:amazonaws",
    //     //   style: {
    //     //     color: "#FF9900",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Azure",
    //     //   fontAwesomeClassname: "simple-icons:microsoftazure",
    //     //   style: {
    //     //     color: "#0089D6",
    //     //   },
    //     // },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     // {
    //     //   skillName: "PostgreSQL",
    //     //   fontAwesomeClassname: "simple-icons:postgresql",
    //     //   style: {
    //     //     color: "#336791",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "MongoDB",
    //     //   fontAwesomeClassname: "simple-icons:mongodb",
    //     //   style: {
    //     //     color: "#47A248",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Docker",
    //     //   fontAwesomeClassname: "simple-icons:docker",
    //     //   style: {
    //     //     color: "#1488C6",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Kubernetes",
    //     //   fontAwesomeClassname: "simple-icons:kubernetes",
    //     //   style: {
    //     //     color: "#326CE5",
    //     //   },
    //     // },
    //   ],
    // },
    {
      title: "Graphic/Video Editing",
      fileName: "DesignImg",
      skills: [
        "🟣 Designing highly attractive user interfaces for both mobile and web applications",
        "🟣 Cutting and inputting transitions on videos using DaVinci Resolve",
        "🟣 Manipulate images using GIMP to create new images",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "GIMP",
          fontAwesomeClassname: "devicon:gimp",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "DaVinci resolve",
          imageSrc: "davinci.png",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "logos:swift",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/ethanharianto/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/ethanharianto",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ethanharianto",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
    {
      siteName: "freeCodeCamp",
      iconifyClassname: "simple-icons:freecodecamp",
      style: {
        color: "#ffffff",
      },
      profileLink: "https://www.freecodecamp.org/EthanHarianto",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Stanford University",
      subtitle: "B.S. in Computer Science",
      logo_path: "SU_logo.png",
      alt_name: "Stanford University",
      duration: "2022 - 2026",
      descriptions: [
        "🟣 I have taken a variety of computer science courses as part of the core curriculum of the B.S. in computer science.",
        "🟣 Apart from this, I have also taken classes in psychology and management science.",
        "🟣 I plan to declare the computer engineering track; however, I do not count out the A.I. track as the field is growing rapidly.",
      ],
      website_link: "https://www.stanford.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Responsive Web Design",
      subtitle: "- freeCodeCamp",
      logo_path: "FreeCodeCamp_logo.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/EthanHarianto/responsive-web-design",
      alt_name: "freeCodeCamp",
      color_code: "#0a0a23",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      subtitle: "- freeCodeCamp",
      logo_path: "FreeCodeCamp_logo.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/EthanHarianto/javascript-algorithms-and-data-structures",
      alt_name: "freeCodeCamp",
      color_code: "#0a0a23",
    },
    {
      title: "Back-End Engineering Virtual Experience Program",
      subtitle: "- Lyft",
      logo_path: "Lyft_logo.png",
      certificate_link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Lyft/xSw9echtixLAoPdsH_Lyft_weq6CyE6oaqjb9yvG_1687494533335_completion_certificate.pdf",
      alt_name: "Lyft",
      color_code: "#ffffff",
    },
    {
      title: "Software Engineering Virtual Experience",
      subtitle: "- Chase",
      logo_path: "chase_logo.png",
      certificate_link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_weq6CyE6oaqjb9yvG_1688006466045_completion_certificate.pdf",
      alt_name: "Chase",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internships, and Volunteerships",
  description:
    "I have gained valuable experience through various roles in my career, including working as a waiter, tutor, intern, and studio operator. Although I may not have extensive industry experience, I have actively pursued opportunities in the technology field.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Studio Operator",
          company: "Stanford Center for Professional Development",
          company_url: "https://scpd.stanford.edu/",
          logo_path: "stanford_logo.png",
          duration: "Dec 2022 - Present",
          location: "Stanford, California",
          description:
            "Within SCPD, we house cutting-edge recording studios dedicated to broadcasting and recording classes for remote students. As a skilled studio operator, my role involves seamlessly managing a range of sophisticated equipment such as cameras, video switchers, and audio mixers, ensuring the flawless recording and broadcast of classes.",
          color: "#fc1f20",
        },
        {
          title: "Waiter",
          company: "Thai Elephant 2",
          company_url: "https://thaielephant2.com/",
          logo_path: "te2.png",
          duration: "March 2020 - September 2022",
          location: "Patterson, New York",
          description:
            "Thai Elephant 2 is both my family's cherished restaurant and childhood home. As a waiter, I warmly welcomed customers, taking orders both in person and over the phone. Moreover, I take pride in maintaining a clean and inviting environment, diligently clearing tables for our valued guests. In addition to my front-of-house responsibilities, I also contribute to the restaurant's success by efficiently handling take-out orders and revamping our website to align with contemporary aesthetics.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        // {
        //   title: "Machine Learning Intern",
        //   company: "TikTok Inc.",
        //   company_url: "https://www.tiktok.com/en/",
        //   logo_path: "tiktok_logo.png",
        //   duration: "May 2022 - Aug 2022",
        //   location: "San Francisco, USA",
        //   description:
        //     "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
        //   color: "#000000",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Tutor",
          company: "Kumon",
          company_url: "https://kumon.com/",
          logo_path: "kumon.png",
          duration: "December 2021 - August 2022",
          location: "Elmhurst, New York",
          description:
            "Kumon is a Math and Reading after-school program which aims to bolster young students' educations. As a tutor, I helped grade and teach students in subjects such as geometry, algebra, and calculus.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have done many projects in the areas of computer science and design. Below are my pinned GitHub repositories.", //two video edits I made for friends, and two graphic edits I made for personal use.
};

const publicationsHeader = {
  // title: "Publications",
  // description:
  //   "I have worked on and published a few research papers and publications of my own.",
  // avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description: "Feel free to reach out to me on any of the following!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
