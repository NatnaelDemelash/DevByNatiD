import { IconType } from 'react-icons';
import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiX,
} from 'react-icons/si';

export const EXPERIENCES = [
  {
    year: '2024 - Present',
    role: 'Software Engineer',
    company: 'GoodayOn',
    description: `Contributed to the development of web applications using JavaScript, Vue.js, and React.js. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ['Vue', 'Tailwind', 'React', 'Firebase'],
  },
  {
    year: '2021-2023',
    role: 'Operation Team Lead',
    company: 'GoodayOn',
    description: `Successfully utilize CRM software tools, including Trello and Jira, to streamline and
    enhance project management processes.`,
    technologies: ['Vue', 'Firebase'],
  },
];

export const PROJECTS = [
  {
    num: '፩ - 01',
    category: 'frontend',
    title: 'Puluk Travel',
    description: 'Travel UI/UX App for Camping',
    tech: [SiTypescript, SiNextdotjs, SiTailwindcss] as IconType[],
    link: 'puluk-travel.vercel.app',
    cover: '/Project-1.png',
    background: 'bg-[#CD6155]',
  },
  {
    num: '፪ - 02',
    category: 'frontend',
    title: 'Pizzeria Pizza',
    description:   'Pizza ordering website .Users can browse through a variety of pizza options, select their preferred menu',
    tech: [SiReact, SiReactquery, SiTailwindcss] as IconType[],
    link: 'pizzeria101.netlify.app/',
    cover: '/Project-2.png',
    background: 'bg-[#512E5F]',
  },
  {
    num: '፫ - 03',
    category: 'frontend',
    title: 'OmniFood',
    description:
      '[Cloned website] An AI based tech company which majorly focuses on consumer well-being through a healthy diet.',
    tech: [SiHtml5, SiCss3, SiJavascript] as IconType[],
    link: 'https://localhost:300',
    cover: '/Project-3.png',
    background: 'bg-indigo-500',
  },
  {
    num: '፬ - 04',
    category: 'frontend',
    title: 'Aurora Aisel',
    description:'An Ecommerce app built with React.js using react context -( FakeStore API) for data fetching/backend',
    tech: [SiReact, SiRedux, SiTailwindcss, SiReactquery] as IconType[],
    link: 'aurora-aisel-shop.vercel.app',
    cover: '/Project-4.png',
    background: 'bg-[#F0B27A]',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];