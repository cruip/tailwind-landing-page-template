import { Company, TimelineSection, Project } from './definition'

export const companies: Company[] = [
  {
    name: 'KMC Solutions',
    role: 'Fullstack Development Intern',
    proj_name: 'AI for Auto-Ticket Categorization',
    details: 'A comprehensive customer support solution with features such as dynamic fields and blocks, customizable workflows, SLA management, ticket templates, scheduled tickets, email templates, and email-to-ticket functionality.',
    image: '/images/kmcc.png',
    method: ['Python','PyTorch','Hugging Face'],
    display: ['Kedro.py', 'TextClassification.py'],
    proj_img: ['/kedro-pipeline (1).png','/girl.png']
  },
  {
    name: 'Mediacorp',
    role: 'Business Analyst Intern',
    proj_name: 'CNA News Ingestion Dashboard Enhancement',
    details: "Built MFA Login, Key Vault storing Secrets, Search & Filter Feature, and Integrated AI Video Detection Model. Implemented a seamless workflow to trigger AI model processing upon user interaction with each video, enhancing the dashboard's analytical capabilities and providing real-time insights",
    image: '/images/mediacorp.jpeg',
    method: ['NodeJS','Vault','AWS','Docker','ExpressJS','Cognito','REST APIs'],
    display: ['dashboard.hbs', 'vault.ssh','CNA Fast'],
    proj_img: ['/dashboard.png','/vault.png','/fast.png']
 // Replace with the actual image URL
  },
  {
    name: 'STMicroelectronics',
    role: 'Data Engineer Intern',
    proj_name: 'MLOPs',
    details: 'Developed the backend of generalised monitoring software for machine learning models classifying wire bond integrity in semiconductor chips. Collaborated with a multidisciplinary team of data scientists and engineers to design testing solution architecture.',
    image: '/images/st.jpeg',
    method: ['FastAPI','Spicy.stats','Tensorflow','Scikit-Learn','numpy','Dataiku'],
    display: ['mlops', 'data_quality','alert'],
    proj_img: ['/images/mlops.jpg','/images/datamlops.jpg']
  },
  {
    name: 'TUMAsia',
    role: 'Data Laboratory Assistant',
    proj_name: 'Future Mobility in Singapore',
    details: 'Sharpened data preparation, summarization, and analytics using Excel and Python. Optimized tracking processes and reached goal 2 months before forecast',
    image: '/images/tum.png',
    method: ['Computer Vision','Python','OpenCV','FFmpeg','Excel'],
    display: ['vehicles', 'stat'],
    proj_img: ['/tum.jpeg','/stats.png']
  },
   {
    name: 'NTU@SG',
    role: 'Tutor & Teaching Assistant',
    proj_name: '',
    details: 'Managed three classes: Design – System Thinking, Venture Capital Practice, and Technology Commercialization. Assist tutors prepare slides, check class attendance, and review students’ assignment. Acquired knowledge in Business, Problem Solving, and AI Technology',
    image: '/images/ntu.jpeg',
    method: ['System Design','Management'],
    display: ['class', 'electrical'],
    proj_img: ['/comm.png','/girl.png']
  },
  // Add more companies as needed
];


export const TimelineData: TimelineSection[] = [
  {
    title: '.    T R A I N I N G  .',
    items: ['Computer Vision', 'Design Database', 'AWS Collaboration'],
    img: ['hehe', 'hihi', 'hoho']
  },
  {
    title: '.    C O M M U N I T Y  .',
    items: ['MLDA Maincommitee', 'GL FOC-VNNTU', 'Chief Prog Enitio Camp'],
    img: ['hehe', 'hihi', 'hoho']

  },
  {
    title: '.  C R E A T I V E .',
    items: ['Vlog', 'TikTok', 'Blog'],
    img: ['hehe', 'hihi', 'hoho']

  },
  {
    title: 'C O N T I N U E  S T U D Y  .',
    items: [
      'AWS Cloud',
      'Google Business Intelligence',
      'Database Specialization',
      'Machine Learning',
      'Web Development',
      'UI/UX Design'
    ],
    img: ['hehe', 'hihi', 'hoho']

  },
];

export const projects: Project[] = [
  {
    title: "Project One",
    image: "path/to/image1.jpg",
    description: "A short description of Project One.",
    skills: ["JavaScript", "TypeScript", "React"],
    link: "http://example.com/project-one"
  },
  {
    title: "Project Two",
    image: "path/to/image2.jpg",
    description: "A short description of Project Two.",
    skills: ["Python", "Django", "PostgreSQL"],
    link: "http://example.com/project-two"
  },
  // Add more projects as needed
];