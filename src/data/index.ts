import remoteEye from '../assets/images/remote-eye.jpg';
import lngMarket from '../assets/images/LNG-market.jpg';
import marineCustomer from '../assets/images/marine-customer-enhancement.jpg';

export const aboutCardsData = [
  {
    icon: 'lightbulb',
    title: 'Problem Solver',
    description: 'Driven by logic and creativity to find the most effective solutions for any challenge.',
  },
  {
    icon: 'groups',
    title: 'Collaborative Spirit',
    description: 'Thrive in team environments, believing the best products are built through shared knowledge and effort.',
  },
  {
    icon: 'school',
    title: 'Lifelong Learner',
    description: 'Continuously exploring new technologies and frameworks to stay at the forefront of development.',
  },
];

export const skillsData = [
  { name: 'JavaScript', icon: 'code' },
  { name: 'TypeScript', icon: 'code_blocks' },
  { name: 'React', icon: 'integration_instructions' },
  { name: 'Node.js', icon: 'developer_mode' },
  { name: 'Python', icon: 'terminal' },
  { name: 'PostgreSQL', icon: 'storage' },
  { name: 'AWS', icon: 'cloud' },
  { name: 'Docker', icon: 'deployed_code' },
];

export const projectsData = [
  {
    title: 'Project Remote Eye',
    description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. It features a responsive user interface, secure payment gateway integration, and a real-time inventory management system to provide a seamless shopping experience.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    imageSrc: remoteEye,
    imageAlt: 'A modern digital 3D printed goggle on a dark background',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project Beta',
    description: 'A data visualization dashboard using Python (Flask) and D3.js. It transforms complex datasets into interactive charts and graphs, enabling users to explore data patterns and gain insights through a dynamic and user-friendly interface.',
    tags: ['Python', 'Flask', 'D3.js', 'JavaScript'],
    imageSrc: lngMarket,
    imageAlt: 'Two large LNG ships sailing in the open ocean under a clear sky',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A cloud-native, serverless API deployed on AWS Lambda. It provides a highly scalable and cost-effective backend for a mobile application, handling thousands of requests per second with automatic scaling and minimal maintenance.',
    tags: ['AWS Lambda', 'Serverless', 'API Gateway', 'DynamoDB'],
    imageSrc: marineCustomer,
    imageAlt: 'A docked recreational boat',
    liveUrl: '#',
    sourceUrl: '#',
  },
];
