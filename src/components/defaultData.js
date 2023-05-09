import austinImg from '../assets/austin.jpg';
import yourImg from '../assets/your-image.jpg';

const dummyData = {
  newData: true,
  headerH1: 'Austin Powers',
  headerH2: 'International Man of Mystery',
  headerImg: austinImg,
};

const defaultData = {
  newData: true,
  headerH1: 'Your Name',
  headerH2: 'Job Description',
  headerImg: yourImg,
  aboutMe: 'A paragraph about you',
  skills: [
    'Relevant skills',
    'Like languages',
    'Or your astonishing',
    'Team player qualities',
  ],
  jobs: [
    {
      expTitle: 'Your job title',
      expSubtitle: 'Where you worked',
      from: 'Year you started',
      to: 'Year you finished',
      points: [
        'Optional',
        'What you did in your job',
        'And other relevant information',
      ],
    },
  ],
  education: [
    {
      expTitle: 'Where you studied',
      expSubtitle: 'Education description',
      from: 'Year you started',
      to: 'Year you finished',
      points: [
        'Optional',
        'What you learned',
        'And other relevant information',
      ],
    },
  ],
};

export { dummyData, defaultData };
