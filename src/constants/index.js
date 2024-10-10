import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  pcuser,
  paises,
  relogio,
  ecommerce,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvedor Web",
    icon: web,
  },
  {
    title: "Desenvolvedor React",
    icon: mobile,
  },
  {
    title: "Desenvolvedor Backend",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Dev Front End",
    company_name: "CIEEMG",
    icon: pcuser,
    iconBg: "#383E56",
    date: "Maio 2024 - Atual",
    points: [
      "Desenvolvendo e Gerenciando aplicações usando React.js e outras tecnologias relacionadas.",
      "Colaborando com time multifuncional.",
      "Implementando designs responsivos e garantir compatibilidade entre navegadores.",
      "Revisando códigos e fornecendo feedback para outros devs.",
    ],
  },
];

const projects = [
  {
    name: "Lista de Países",
    description:
      "Projeto desenvolvido majoritariamente em React, onde o usuário vê informações disponíveis de todos os países do mundo.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: paises,
    source_code_link: "https://github.com/RicardoAndre69/projetopaises",
  },
  {
    name: "Site E-Commerce",
    description:
      "Primeiro site e-commerce que eu criei cujo tema escolhido foi venda de vestimentas, calçados e acessórios esportivos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://delightful-narwhal-b03a47.netlify.app/",
  },
  {
    name: "Relógio em Tempo Real",
    description:
      "Meu primeiro projeto que eu utilizei javascript. Projeto simples que mostra o hórario em tempo real.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: relogio,
    source_code_link: "https://mellifluous-sunburst-e2e98d.netlify.app/",
  },
];

export { services, technologies, experiences, projects };