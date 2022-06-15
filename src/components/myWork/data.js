//Kasper Template Samples Images
import homePage from '../../assets/kasper-images/homeSection.png'
import servicesSection from '../../assets/kasper-images/servicesSection.png'
import portfolioSection from '../../assets/kasper-images/portfolioSection.png'
import pricingSection from '../../assets/kasper-images/pricingSection.png'
import testimonialsSection from '../../assets/kasper-images/testimonialsSection.png'
import footerSection from '../../assets/kasper-images/footerSection.png'
import sample from '../../assets/kasper-images/sample.png'

//Rest Countries Api Images
import HomeDark from '../../assets/rest-countries-api/HomeDark.png'
import HomeScroll from '../../assets/rest-countries-api/HomeScroll.png'
import HomeFilter from '../../assets/rest-countries-api/FilterPage.png'
import ErrorPage from '../../assets/rest-countries-api/ErrorPage.png'
import Country from '../../assets/rest-countries-api/CountryPage.png'

//Space Tourism Images
import SpaceHome from '../../assets/space-toursim/SpaceHome.png'
import DestinationsPage from '../../assets/space-toursim/DestinationsPage.png'
import CrewPage from '../../assets/space-toursim/CrewPage.png'
import TechnologiesPage from '../../assets/space-toursim/TechnolgiesPage.png'

//Interactive Comments Images
import CommmentsHome from '../../assets/interactice-comments/CommentsHome.png'
import CommmentsPage from '../../assets/interactice-comments/CommentsPage.png'
import Replies from '../../assets/interactice-comments/Replies.png'
const projects = [
  {
    id:'p2' ,
    name: 'Kasper Template',
    header: 'One single page',
    subHeader: 'Landing page contains sevrel samples of sections in real-life ',
    technologies: ['Html', 'Css'],
    details:
      'I used almost all my Css knowledge back then. It was my first big Css project ',
    homePage: homePage,
    live: 'https://mouez98.github.io/kasper.github.io/',
    sourceCode: 'https://github.com/Mouez98/kasper.github.io',
    images: [
      homePage,
      servicesSection,
      sample,
      portfolioSection,
      testimonialsSection,
      pricingSection,
      footerSection,
    ],
  },
  {
    id:'p3' ,
    name: 'Space Tourism Website',
    header: 'Space Tourism Website',
    subHeader: 'One single page with illusion of routing',
    technologies: ['Html', 'Css', 'ReactJs','react-router-don'],
    details:
      'I took the design from frontendmentor website, and I really enjoyed building this project. ',
    homePage: SpaceHome,
    live: 'https://space-tourism-website-main-react.vercel.app/',
    sourceCode: 'https://github.com/Mouez98/space-tourism-website-main-react.git',
    images: [
      SpaceHome,
      DestinationsPage,
      CrewPage,
      TechnologiesPage
    ],
  },
  {
    id:'p1' ,
    name: 'Rest Countries Api',
    header: 'Rest Countries',
    subHeader: 'All countries in one page ',
    technologies: ['Html', 'Scss','JavaScript','ReactJs','react-router-dom'],
    details:
      'Fetching data from API and display them all with ability to search or filter by region and theme toggle.',
    homePage: HomeFilter,
    live: 'https://rest-api-93c6e.web.app/',
    sourceCode: 'https://github.com/Mouez98/rest-countries-api.git',
    images: [
      HomeDark,
      HomeScroll,
      ErrorPage,
      HomeFilter,
      Country
    ],
  },
  
  
  {
    id:'p4' ,
    name: 'Interactive Comments Section',
    header: 'Interactive comments',
    subHeader: 'This page contain sevrel section ',
    technologies: ['Html', 'Css', 'ReactJs','redux'],
    details:
      'I used almost all my Css knowledge back then. It was my first big Css project ',
    homePage: CommmentsHome,
    live: 'https://interactive-comments-section-tau.vercel.app/',
    sourceCode: 'https://github.com/Mouez98/interactive-comments-section.git',
    images: [
      CommmentsHome,
      CommmentsPage,
      Replies,
    ],
  },
]

export default projects
