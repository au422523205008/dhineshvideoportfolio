// Centralized portfolio data — every value here is real, user-provided
// information. Nothing is invented; anything not yet supplied is simply
// left out rather than filled with a placeholder.

export const personalInfo = {
  name: 'G. Dhinesh Kumar',
  shortName: 'Dhinesh',
  degree: 'B.Tech Information Technology',
  year: 'Final Year',
  college: 'University College of Engineering, Villupuram',
  primaryRole: 'Full Stack Web Developer',
  tagline:
    'Building modern digital experiences through full-stack development, thoughtful interfaces, and practical technology.',
};

export const aboutIntro =
  'a final-year B.Tech Information Technology student at University College of Engineering, Villupuram, dedicated to crafting clean, functional and highly scalable web applications.';

export const expertiseAreas = [
  {
    number: '01',
    title: 'Frontend Development',
    text: 'Building responsive, interactive user interfaces with React.js, JavaScript, HTML and CSS.',
  },
  {
    number: '02',
    title: 'Backend Development',
    text: 'Writing server-side logic and applications with Node.js, Java, Python and C.',
  },
  {
    number: '03',
    title: 'Database Development',
    text: 'Designing and querying relational data with PostgreSQL and MySQL.',
  },
  {
    number: '04',
    title: 'UI / UX',
    text: 'Shaping responsive interfaces and user-focused web experiences.',
  },
];

export const skillsData = [
  { category: 'Frontend Development', skills: ['React.js', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Backend Development', skills: ['Node.js', 'Java', 'Python', 'C'] },
  { category: 'Database', skills: ['PostgreSQL', 'MySQL'] },
  { category: 'UI / UX', skills: ['Responsive Interfaces', 'User-Focused Design', 'Web Experiences'] },
];

export const internships = [
  {
    role: 'Full Stack Web Development Intern',
    company: 'Zigainfotech, Chennai',
    type: 'Offline Internship',
    duration: '1 Month',
  },
  {
    role: 'Intern',
    company: 'Techno Hacks Solutions',
    type: 'Online Internship',
    duration: '',
  },
];

// Every project below reflects real, verifiable work — the live URL is
// the actual deployed app. Where a build is still in progress (Indian
// Hand Sign Language), it's marked that way rather than presented as
// finished.
export const projects = [
  {
    index: '01',
    title: "Dr. Arthi's Dentophilic Centre",
    description:
      "A website and management system built for a dental practice in Hosur — a public-facing site covering the clinic's services alongside clinic-side tools for managing patients, appointments and billing.",
    technologies: ['React', 'React Router DOM', 'JavaScript', 'jsPDF', 'Recharts', 'Dexie'],
    status: 'Live — deployed for real client use',
    liveUrl: 'https://dr-arthis-dentophilic-centre.vercel.app/',
  },
  {
    index: '02',
    title: 'ONOFF Dance Studio',
    description:
      'The official website for a dance studio in Madipakkam, Chennai — presenting its classes, trainers, timings and contact details, with a built-in review system for visitors.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Browser Local Storage'],
    status: 'Live — deployed for real client use',
    liveUrl: 'https://onoff-iota.vercel.app/',
  },
  {
    index: '03',
    title: 'Indian Hand Sign Language',
    description:
      'Final-year project: a camera-based interaction system exploring real-time recognition of Indian Hand Sign Language using computer vision. Still under development.',
    technologies: ['MediaPipe', 'React', 'Node.js', 'Camera-based Interaction'],
    status: 'In progress — final-year project, not yet complete',
    liveUrl: '',
  },
];

// Real, verifiable credentials — each backed by an actual certificate
// image at /public/assets/certifications/.
export const certifications = [
  {
    title: 'UI and UX Design',
    organization: 'Naan Mudhalvan — Tamil Nadu Skill Development Corporation, with GUVI',
    date: '17 Nov 2025',
    credentialId: 'NMO2526EAU35826293150',
    image: '/assets/certifications/naan-mudhalvan-uiux.jpg',
  },
  {
    title: 'UI/UX — Certificate of Participation',
    organization: 'Brand Monk Academy, in association with NSDC',
    date: '1 Jul 2026',
    credentialId: 'SMAPARMQ07622389',
    image: '/assets/certifications/brand-monk-uiux.jpg',
  },
  {
    title: 'Full Stack Web Development — Internship Completion',
    organization: 'Ziga Infotech Ventures Pvt Ltd',
    date: '15 Jul 2026',
    image: '/assets/certifications/ziga-internship.jpg',
  },
];

export const contact = {
  email: 'dineshgopu2311@gmail.com',
  phone: '9677475323',
  countryCode: '91',
};

export const cvUrl = '/assets/Dhinesh-Kumar-CV.pdf';
