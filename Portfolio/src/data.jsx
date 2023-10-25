import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact,FaVuejs,FaNodeJs,FaDocker,FaGithub } from 'react-icons/fa';
import VM from './assets/VirtualMachine.png'
import GKE from './assets/gke.png'
import GAE from './assets/appEngine.png'
import cloudRun from './assets/cloudRun.png'
import ES from './assets/elasticSearch.png'
import mongo from './assets/mongodb.webp'
import API from './assets/restAPI.png'
export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'Vue',
    icon: <FaVuejs className='h-16 w-16 text-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'Node',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'Javascipt',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'Docker',
    icon: <FaDocker className='h-16 w-16 text-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'Github',
    icon: <FaGithub className='h-16 w-16 text-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'Virtual Machine',
    icon: <img src={VM} className='h-16 w-16 bg-emerald-500' />,
  },
  {
    id: nanoid(),
    title: 'GKE',
    icon: <img src={GKE} className='h-16 w-16' />,
  },
  {
    id: nanoid(),
    title: 'App Engine',
    icon: <img src={GAE} className='h-16 w-16' />,
  },
  {
    id: nanoid(),
    title: 'Cloud Run',
    icon: <img src={cloudRun} className='h-16 w-16' />,
  },
  {
    id: nanoid(),
    title: 'MongoDb',
    icon: <img src={mongo} className='h-16 w-16' />,
  },
  {
    id: nanoid(),
    title: 'Elastic Search',
    icon: <img src={ES} className='h-16 w-16' />,
  },
  {
    id: nanoid(),
    title: 'REST API',
    icon: <img src={API} className='h-16 w-16' />,
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
