import homePage from '../../assets/kasper-images/homeSection.png'
import servicesSection from '../../assets/kasper-images/servicesSection.png'
import portfolioSection from '../../assets/kasper-images/portfolioSection.png'
import pricingSection from '../../assets/kasper-images/pricingSection.png'
import testimonialsSection from '../../assets/kasper-images/testimonialsSection.png'
import footerSection from '../../assets/kasper-images/footerSection.png'
import sample from '../../assets/kasper-images/sample.png'

const projects = [
  {
    id:'p1' ,
    name: 'Kasper Template',
    header: 'ChowNow Ordering Web',
    subHeader: 'WHITE-LABEL ONLINE ORDERING SOLUTION.',
    technologies: ['Html', 'Css','JavaScript'],
    details:
      'ChowNow is a commission-free online ordering system and food ordering app helping restaurants feed their hungry customers.',
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
    id:'p2' ,
    name: 'Kasper Template',
    header: 'One single page',
    subHeader: 'This page contain sevrel section ',
    technologies: ['Html', 'Css','JavaScript'],
    details:
      'I used almost all my Css knowledge back then. It was my first big Css project ',
    homePage: homePage,
    live: 'https://mouez98.github.io/kasper.github.io/',
    sourceCode: 'https://github.com/Mouez98/kasper.github.io',
    images: [
      servicesSection,
      sample,
      portfolioSection,
      testimonialsSection,
      pricingSection,
      footerSection,
    ],
  }
]

export default projects
