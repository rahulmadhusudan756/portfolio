import { PersonalInfo, SkillCategory, Project, Experience, Education } from './types';

export const personalInfo: PersonalInfo = {
  name: 'Rahul Madhusudan',
  title: 'Computer Science Student | AI & ML Enthusiast',
  email: 'rahulmadhusudan756@gmail.com',
  phone: '+91-890-430-5708',
  location: 'Bangalore, India',
  bio: [
    'Passionate software development enthusiast with a strong interest in solving problems through technology.',
    'Currently pursuing Bachelor of Engineering in Computer Science and Engineering with specialization in AI & ML at Ramaiah Institute of Technology, maintaining a CGPA of 9.7/10.0.',
    'Eager to learn new tools and frameworks while contributing to impactful projects in full-stack development and machine learning.',
  ],
  resumeUrl: '/Rahul_Madhusudan_Resume.pdf',
  social: {
    github: 'https://github.com/rahulmadhusudan756',
    linkedin: 'https://linkedin.com/in/rahul-madhusudan-b164462a5',
  },
};

export const skills: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'C++' },
      { name: 'C' },
      { name: 'SQL' },
      { name: 'HTML/CSS' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'Flutter' },
      { name: 'scikit-learn' },
      { name: 'pandas' },
      { name: 'numpy' },
    ],
  },
  {
    category: 'Databases & Tools',
    skills: [
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'Git' },
    ],
  },
  {
    category: 'Core Competencies',
    skills: [
      { name: 'Data Structures' },
      { name: 'Algorithms' },
      { name: 'Machine Learning' },
      { name: 'Full-Stack Development' },
      { name: 'Database Management' },
      { name: 'RESTful APIs' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'HeartGuardAI',
    description: 'ML classification model to predict heart disease risk from patient health data with an interactive web interface.',
    longDescription: 'Developed a machine learning classification model in Python to predict heart disease risk from patient health data. Built a RESTful backend API in Python and an interactive TypeScript frontend for real-time predictions. Implemented data preprocessing and optimization techniques to improve prediction accuracy.',
    technologies: ['Python', 'TypeScript', 'Machine Learning', 'scikit-learn', 'REST API', 'pandas', 'numpy'],
    github: 'https://github.com/rahulmadhusudan756/heart_disease_classification',
    featured: true,
    keyFeatures: [
      'Real-time heart disease risk prediction',
      'RESTful API for seamless integration',
      'Data preprocessing and feature engineering',
      'Interactive TypeScript frontend',
      'Optimized ML model accuracy',
    ],
  },
  {
    id: '2',
    title: 'Blogging App',
    description: 'Full-featured blogging application with user authentication, post management, and theme customization.',
    longDescription: 'Developed a comprehensive blogging app using Flutter with user authentication and post management features. Implemented dark/light themes and interactive UI components for an engaging user experience. Features include create, read, update, and delete operations for blog posts.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'UI/UX Design'],
    featured: true,
    keyFeatures: [
      'User authentication system',
      'Create, read, update, delete blog posts',
      'Dark and light theme switching',
      'Responsive and interactive UI',
      'Real-time data synchronization',
    ],
  },
];

export const experience: Experience[] = [];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Ramaiah Institute of Technology',
    degree: 'Bachelor of Engineering',
    field: 'Computer Science and Engineering (AI & ML)',
    startDate: '2023-08',
    endDate: 'Present',
    gpa: '9.7/10.0',
    description: [
      'Specialization in Artificial Intelligence and Machine Learning',
      'Core Competencies: Data Structures, Algorithms, DBMS, Machine Learning, Full-Stack Development',
      'Maintaining excellent academic performance with CGPA of 9.7',
    ],
  },
  {
    id: '2',
    institution: 'Vidya Mandir IND PU College',
    degree: 'Pre-University College',
    field: 'PCMC (Physics, Chemistry, Mathematics, Computer Science)',
    startDate: '2021-06',
    endDate: '2023-05',
    gpa: '94% (PCMC: 98.75%)',
    description: [
      'Achieved 94% overall with exceptional performance in PCMC subjects (98.75%)',
      'Strong foundation in mathematics and computer science',
    ],
  },
  {
    id: '3',
    institution: 'Presidency School',
    degree: 'High School',
    field: 'ICSE',
    startDate: '2010-06',
    endDate: '2021-05',
    gpa: '94.83%',
    description: [
      'Completed ICSE with distinction',
      'Built strong analytical and problem-solving skills',
    ],
  },
];
