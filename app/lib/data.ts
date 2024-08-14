import { Company, TimelineSection, Project } from './definition'

export const companies: Company[] = [
  {
    name: 'KMC Solutions',
    role: 'Fullstack Development Intern',
    proj_name: 'AI for Auto-Ticket Categorization',
    details: 'A comprehensive customer support solution with features such as dynamic fields and blocks, customizable workflows, SLA management, ticket templates, scheduled tickets, email templates, and email-to-ticket functionality.',
    image: '/images/kmcc.png',
    method: ['Python','PyTorch','Hugging Face','Fine-Tune','Data Pipeline','NextJS','LangChain'],
    display: ['Kedro.py', 'TextClassification.py','Chat Bot'],
    proj_img: ['/images/work/kedro-pipeline (1).png','/images/work/test.png','/images/work/girl.jpg']
  },
  {
    name: 'Mediacorp',
    role: 'Business Analyst Intern',
    proj_name: 'CNA News Ingestion Dashboard Enhancement',
    details: "Built MFA Login, Key Vault storing Secrets, Search & Filter Feature, and Integrated AI Video Detection Model. Implemented a seamless workflow to trigger AI model processing upon user interaction with each video, enhancing the dashboard's analytical capabilities and providing real-time insights",
    image: '/images/mediacorp.jpeg',
    method: ['NodeJS','Vault','AWS','Docker','ExpressJS','Cognito','REST APIs'],
    display: ['dashboard.hbs', 'vault.ssh','CNA Fast'],
    proj_img: ['/images/work/dashboard.png','/images/work/vault.png','/images/work/cna.png']
 // Replace with the actual image URL
  },
  {
    name: 'STMicroelectronics',
    role: 'Data Engineer Intern',
    proj_name: 'MLOPs',
    details: 'Developed the backend of generalised monitoring software for machine learning models classifying wire bond integrity in semiconductor chips. Collaborated with a multidisciplinary team of data scientists and engineers to design testing solution architecture.',
    image: '/images/st.jpeg',
    method: ['FastAPI','Spicy.stats','Tensorflow','Scikit-Learn','numpy','Dataiku'],
    display: ['mlops', 'data_quality'],
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
    proj_img: ['/images/work/ve.png','/images/work/ana.png']
  },
   {
    name: 'NTU@SG',
    role: 'Student Research Assistant',
    proj_name: 'Conversational AI system',
    details: 'Implemented and tested the affordances of generative AI (via fine-tuning and/or prompt-tuning) to propose new pedagogical features in this system. Current use cases in math and data science education for secondary and tertiary education',
    image: '/images/ntu.jpeg',
    method: ['Fine-tuning','Prompt-tuning','Problem-Solving','Generative AI','Research'],
    display: ['Generative AI'],
    proj_img: ['/images/work/edu.jpg']
  },
  // Add more companies as needed
];


export const TimelineData: TimelineSection[] = [
  {
    title: '.    T R A I N I N G  .',
    items: ['Computer Vision', 'Design Database', 'AWS Collaboration'],
    img: ['/images/cca/cv.jpg', '/images/cca/db.jpg', '/images/cca/aws.jpg']
  },
  {
    title: '.    C O M M U N I T Y  .',
    items: ['MLDA Maincommitee', 'GL FOC-VNNTU', 'Chief Prog Enitio Camp'],
    img: ['/images/cca/maincom.jpg', '/images/cca/GL.jpg', '/images/cca/progs.jpg']

  },
  {
    title: '.  C R E A T I V E .',
    items: ['Vlog', 'TikTok', 'Blog'],
    img: ['/images/cca/vlog.png', '/images/cca/tiktok.jpg', '/images/cca/blog.png']

  },
  {
    title: 'C O N T I N U E  S T U D Y  .',
    items: [
      'AWS Cloud',
      'Business Intelligence',
      'Database Specialization',
      'Machine Learning',
      'Web Development',
      'Entrepreneurship'
    ],
    img: ['/images/cert/aws.png', '/images/cert/biz.png', '/images/cert/db.png','/images/cert/ML.jpg','/images/cert/web.png','/images/cert/entr.png']

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
  {
    title: "Project Two",
    image: "path/to/image2.jpg",
    description: "A short description of Project Two.",
    skills: ["Python", "Django", "PostgreSQL"],
    link: "http://example.com/project-two"
  },
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