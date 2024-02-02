import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  getDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPSJi9U4ydqq12qeo5nQUMcEqlXimEAoI",
  authDomain: "portfolio-f072b.firebaseapp.com",
  projectId: "portfolio-f072b",
  storageBucket: "portfolio-f072b.appspot.com",
  messagingSenderId: "30671997925",
  appId: "1:30671997925:web:7e659ee73f9781596b7d0c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchSkillsData = async () => {
  const skillsCollection = collection(db, "skills");
  const skillsData = await getDocs(skillsCollection);
  return skillsData.docs
    .map((doc) => doc.data())
    .sort((a, b) => b.startDate - a.startDate);
};

const fetchExperienceData = async () => {
  const experienceCollection = collection(db, "experience");
  const experienceData = await getDocs(experienceCollection);
  return experienceData.docs
    .map((doc) => doc.data())
    .sort((a, b) => b.startDate - a.startDate);
};

const fetchhInternshipData = async () => {
  const internshipCollection = collection(db, "internships");
  const internshipData = await getDocs(internshipCollection);
  return internshipData.docs
    .map((doc) => doc.data())
    .sort((a, b) => b.startDate - a.startDate);
};

const fetchVolunteershipData = async () => {
  const volunteershipCollection = collection(db, "volunteerships");
  const volunteershipData = await getDocs(volunteershipCollection);
  return volunteershipData.docs
    .map((doc) => doc.data())
    .sort((a, b) => b.startDate - a.startDate);
};

const fetchGreetingData = async () => {
  const greetingData = await getDoc(
    doc(db, "greeting", "Y7sJspsoRPgwZgKFrnVf")
  );
  return greetingData.data();
};

const fetchExpHeaderData = async () => {
  const greetingData = await getDoc(
    doc(db, "greeting", "j3daWcMQ7nzbj0cSK2Mi")
  );
  return greetingData.data();
};

const fetchSocialMediaData = async () => {
  const socialMediaCollection = collection(db, "socialMedia");
  const socialMediaData = await getDocs(socialMediaCollection);
  return socialMediaData.docs
    .map((doc) => doc.data())
    .sort((a, b) => b.startDate - a.startDate);
};

const fetchcCompetitiveData = async () => {
  const competitiveCollection = collection(db, "competitive");
  const competitiveData = await getDocs(competitiveCollection);
  return competitiveData.docs
    .map((doc) => doc.data())
    .sort((a, b) => b.startDate - a.startDate);
};

const fetchDegreesData = async () => {
  const degreesCollection = collection(db, "degrees");
  const degreesData = await getDocs(degreesCollection);
  return degreesData.docs
    .map((doc) => doc.data())
    .sort((a, b) => b.startDate - a.startDate);
};

const fetchcCertificatesData = async () => {
  const certificatesCollection = collection(db, "certificates");
  const certificatesData = await getDocs(certificatesCollection);
  return certificatesData.docs
    .map((doc) => doc.data())
    .sort((a, b) => b.startDate - a.startDate);
};

const fetchSEO = async () => {
  const seoData = await getDoc(doc(db, "seo", "La4f5t5wupVMHw5C9VeF"));
  return seoData.data();
};

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = await fetchSEO();

//Home Page
const greeting = await fetchGreetingData();

const socialMediaLinks = await fetchSocialMediaData();

const skills = {
  data: await fetchSkillsData(),
};

// Education Page
const competitiveSites = {
  competitiveSites: await fetchcCompetitiveData(),
};

const degrees = {
  degrees: await fetchDegreesData(),
};

const certifications = {
  certifications: await fetchcCertificatesData(),
};

// Experience Page
const experience = {
  title: (await fetchExpHeaderData()).title,
  subtitle: (await fetchExpHeaderData()).subtitle,
  description: (await fetchExpHeaderData()).description,
  header_image_path: (await fetchExpHeaderData()).header_image_path,
  sections: [
    {
      title: "Work",
      work: true,
      experiences: await fetchExperienceData(),
    },
    {
      title: "Internships",
      experiences: await fetchhInternshipData(),
    },
    {
      title: "Volunteerships",
      experiences: await fetchVolunteershipData(),
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: (await fetchExpHeaderData()).project_header,
  description: (await fetchExpHeaderData()).project_desc,
};

const publicationsHeader = {};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: (await fetchExpHeaderData()).contact_title,
    profile_image_path: (await fetchExpHeaderData()).contact_img,
    description: (await fetchExpHeaderData()).contact_desc,
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
