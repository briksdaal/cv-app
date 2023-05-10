import austinImg from '../assets/austin.jpg';
import yourImg from '../assets/your-image.jpg';

const dummyDataRaw = {
  newData: true,
  header: {
    h1: 'Austin Powers',
    h2: 'International Man of Mystery',
    img: austinImg,
  },
  aboutMe: 'I am a charismatic and resourceful secret agent with a passion for saving the world from evil masterminds. With my signature British wit and stylish flair, I am always ready to tackle any mission that comes my way. Armed with an arsenal of gadgets and a groovy attitude, I bring a unique blend of espionage and charm to every assignment.',
  details: {
    email: 'austin.powers@spymail.com',
    phone: '+1 (555) 123-4567',
    address: '123 Spy Lane, London, UK',
    url: 'www.austinpowers.com',
  },
  skills: [
    { text: 'Expert in hand-to-hand combat and martial arts' },
    { text: 'Fluent in multiple languages, including English, French, and German' },
    { text: 'Proficient in operating high-tech spy gadgets and surveillance equipment' },
    { text: 'Outstanding communication and negotiation skills' },
  ],
  jobs: [
    {
      title: 'Senior Agent',
      subtitle: 'MI6 - British Secret Intelligence Service ',
      from: '1965',
      to: 'Present',
      points: [
        { text: 'Conducted undercover operations to gather intelligence on international threats' },
        { text: 'Infiltrated enemy organizations and foiled multiple assassination attempts' },
        { text: 'Utilized cutting-edge technology for espionage and counterintelligence purposes' },
      ],
    },
    {
      title: 'Special Agent',
      subtitle: 'International Espionage Agency',
      from: '1963',
      to: '1965',
      points: [
        { text: 'Executed daring undercover missions to disrupt criminal organizations' },
        { text: '' },
        { text: '' },
      ],
    },
    {
      title: 'Field Agent',
      subtitle: 'Central Intelligence Agency (CIA) ',
      from: '1961',
      to: '1963',
      points: [
        { text: 'Collaborated with intelligence agencies worldwide to combat global threats' },
        { text: 'Conducted reconnaissance missions in hostile territories' },
        { text: 'Rescued hostages and thwarted plans of international villains' },
      ],
    },
  ],
  education: [
    {
      title: 'Spy Academy (London, UK)',
      subtitle: 'Bachelor of Arts in Espionage',
      from: '1960',
      to: '1961',
      points: [
        { text: 'Studied the history and theory of espionage, gaining insights into the evolution of covert operations' },
        { text: 'Specialized in disguise techniques, including creating convincing personas and mastering the art of subterfuge' },
        { text: 'Explored the psychology of espionage and the art of manipulation for strategic advantage' },
      ],
    },
    {
      title: 'Groovy High School (London, UK)',
      subtitle: 'High School Diploma',
      from: '1956',
      to: '1960',
      points: [
        { text: 'Participated in the school\'s secret Spy Club, honing my espionage skills from a young age' },
        { text: 'Developed a keen sense of fashion and style, mastering the art of the groovy 60s attire' },
      ],
    },
  ],
};

const defaultDataRaw = {
  newData: true,
  header: {
    h1: 'Your Name',
    h2: 'Job Description',
    img: yourImg,
  },
  aboutMe: 'A paragraph about you',
  details: {
    email: 'emailadress@provider.com',
    phone: '+1 (234) 567-8910',
    address: '123 Street Name, City, Country',
    url: 'www.yourwebsite.aaa',
  },
  skills: [
    { text: 'Relevant skills' },
    { text: 'Like languages' },
    { text: 'Or your astonishing' },
    { text: 'Team player qualities' },
  ],
  jobs: [
    {
      title: 'Your job title',
      subtitle: 'Where you worked',
      from: 'Year you started',
      to: 'Year you finished',
      points: [
        { text: 'Optional' },
        { text: 'What you did in your job' },
        { text: 'And other relevant information' },
      ],
    },
  ],
  education: [
    {
      title: 'Where you studied',
      subtitle: 'Education description',
      from: 'Year you started',
      to: 'Year you finished',
      points: [
        { text: 'Optional' },
        { text: 'What you learned' },
        { text: 'And other relevant information' },
      ],
    },
  ],
};

export {
  dummyDataRaw, defaultDataRaw,
};
