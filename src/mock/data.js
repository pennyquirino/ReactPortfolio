import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Penelope Quirino',
  name: 'creative web design',
  subtitle: 'via Full-Stack development',
  cta: 'Enter',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Junior Full-Stack Web Developer, recently graduating from the Trilogy Coding Bootcamp hosted through UCONN.',
  paragraphTwo: 'HTML. CSS. JS. MySQL. MongoDB. React.',
  paragraphThree: 'Currently diving deeper into what I learned during bootcamp in hopes to solidify my skills and start creating in the world.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'shopportal.JPG',
    title: 'ShopPortal',
    info: 'an e-commerce marketplace',
    info2: 'using the full MERN stack',
    url: 'https://shopportal-lpx.herokuapp.com/',
    repo: 'https://github.com/pennyquirino/shop-portal', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'recipe.JPG',
    title: 'Quarantine Recipe Machine',
    info: 'application to generate recipes with ingredients on hand',
    info2: 'HTML, CSS, JS, Materialize, and server-side APIs',
    url: 'https://lucpizz.github.io/Quarantine-Recipe-Machine/index.html',
    repo: 'https://github.com/pennyquirino/Quarantine-Recipe-Machine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'budget.jpg',
    title: 'Budget Anywhere',
    info: 'add expenses and deposits on or offline',
    info2: 'created with HTML, CSS, JavaScript, MongoDB',
    url: 'https://warm-beach-15964.herokuapp.com/',
    repo: 'https://github.com/pennyquirino/BudgetAnywhere', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'password.jpg',
    title: 'Password Generator',
    info: 'Dynamic password generator',
    info2: 'created with HTML, CSS, and JavaScript',
    url: 'https://pennyquirino.github.io/Password-Generator/',
    repo: 'https://github.com/pennyquirino/Password-Generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'coding.jpg',
    title: 'JavaScript Coding Quiz',
    info: 'multiple choice question quiz to help you with your coding skills',
    info2: 'created with HTML, CSS, and JavaScript',
    url: 'https://pennyquirino.github.io/JavaScript-Coding-Quiz/',
    repo: 'https://github.com/pennyquirino/JavaScript-Coding-Quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weatherdash.jpg',
    title: 'Weather Dashboard',
    info: 'Dynamic weather app to see your or another city forecast',
    info2: 'made with HTML, CSS, and third-party APIs',
    url: 'https://pennyquirino.github.io/Weather-Dashboard/',
    repo: 'https://github.com/pennyquirino/Weather-Dashboard', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's create beautiful things ",
  btn: 'Connect',
  email: 'pennyquirino@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/penelope-quirino/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/pennyquirino',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
