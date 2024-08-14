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
    title: "Leveraging Language Models for Enhanced Company Performance Prediction",
    image: "images/proj/llm.jpeg",
    description: "By leveraging advanced natural language processing capabilities, this system aims to empower decision-makers with timely and relevant information, enabling them to make informed choices and anticipate market trends more effectively.",
    skills: ["LLM", "Research"],
    link: "https://wis.ntu.edu.sg/webexe/owa/FYP_EEE_STUDENT.show_project?p_proj_id=111270"
  },
  {
    title: "Data Analysis - Transformative Role of Electric Vehicles (EVs)",
    image: "images/proj/ev.png",
    description: "Data Analysis on Determinants for Successful Conversion. Potential impact of this EV conversion on addressing the climate crisis. It offers insights into both short-term and long-term outcomes of implementing EVs on a large scale.",
    skills: ["Data Analysis", "SQL", "NoSQL","MongoDB"],
    link: "https://drive.google.com/file/d/1XGVU7Csn3KWEPm0HDL0PVy0y_CWf8ZnL/view?usp=sharing"
  },
  {
    title: "Metadata Enrichment",
    image: "images/proj/metadata.png",
    description: "Using Docker and ECR of AWS to Deploy Object Detection Model to enhance Metadata of Video.",
    skills: ["Python", "Docker", "CV2", "Torch", "ECR", "Object Detection"],
    link: "https://github.com/tangminhanh/metadata_enrichment/tree/main/docker"
  },
  {
    title: "Game Development on Unity",
    image: "images/proj/game.png",
    description: "Develop an interesting game.",
    skills: ["C#", "Unity", "Interface Design"],
    link: "https://github.com/tangminhanh/minesweeper-unity"
  },
  {
    title: "My Portfolio",
    image: "images/proj/tma.png",
    description: "Built and deploy web with next.js and vercel",
    skills: ["NextJS", "PostgreSQL"],
    link: "https://github.com/tangminhanh/tailwind-landing-page-template"
  },
  {
    title: "Livestream Website",
    image: "images/proj/live.png",
    description: "A Livestream Website using HLS with OBS camera",
    skills: ["NodeJS", "Express", "OBS","fs"],
    link: "https://github.com/tangminhanh/livestreamtest/tree/main/template"
  },
  {
    title: "Fake Job Detection",
    image: "images/proj/fakejob.png",
    description: "Fine-tune a bert model for Multi-label text-classification",
    skills: ["Data Science", "Machine Learning", "Streamlit"],
    link: "https://github.com/tangminhanh/Fake-job-detection"
  },
  {
    title: "Text Classification Fine-tune Bert Model",
    image: "images/proj/ana.png",
    description: "Fine-tune a bert model for Multi-label text-classification",
    skills: ["Python", "Transformers", "Hugging Face"],
    link: "https://github.com/tangminhanh/text-classification"
  },
  {
    title: "OpenAI API",
    image: "images/proj/openai.jpeg",
    description: "Try out OpenAPI Project",
    skills: ["OpenAI", "JavaScript"],
    link: "https://github.com/tangminhanh/open_ai"
  },
  {
    title: "Auto-Adaptive Traffic Light System ",
    image: "images/proj/traffic.png",
    description: "we refered to this paper 'Zero-VIRUS: Zero-shot VehIcle Route Understanding System for Intelligent Transportation', and used transfer learning to re-trained the model with our custom dataset.",
    skills: ["Python", "C++", "transfer learning", "SUMO simulation"],
    link: "https://github.com/tangminhanh/TrafficLightSystemRL-DLW2022-VAlly"
  },
  {
    title: "Job Searching Platform",
    image: "images/proj/1235.png",
    description: "Integrated Web 3 techniques from Affinidi Pte. Ltd. to leverage Blockchain technology, ensuring data security and transparency in job postings and user interactions.",
    skills: ["React", "TailwindCSS", "API", "Vite", "MySQL"],
    link: "https://github.com/tangminhanh/poc_hackathon"
  },
  {
    title: "RE-Station",
    image: "images/proj/re.png",
    description: "Integrated Web 3 techniques from Affinidi Pte. Ltd. to leverage Blockchain technology, ensuring data security and transparency in job postings and user interactions.",
    skills: ["Android", "Dart", "Flutter", "ios-simulator"],
    link: "https://github.com/tangminhanh/RE-Station"
  },
  // Add more projects as needed
];