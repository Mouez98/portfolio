import useLetteranimation from "../../hooks/use-letterAnimation"
import Header from "../Ui/Header"



const Skills = () => {
    const letterClass = useLetteranimation(3000)
    const headerText = ['Skills',' ', '&', ' ', 'Experncies']
    return(
        <div className="container skills-page">
            <div className="text-zone">
               <Header strArray={headerText} letterClass={letterClass} idx={15} />
               <p>Expert in front-end development including technologies like <span class="tech-tag">HTML5</span>,
            <span class="tech-tag">CSS3</span>,
            <span class="tech-tag">JavaScript</span>,
            <span class="tech-tag">jQuery</span>,
            <span class="tech-tag">Angular2</span>,
            <span class="tech-tag">React</span>,
            <span class="tech-tag">TypeScript</span>,
            <span class="tech-tag">Jasmine</span>,
            <span class="tech-tag">Bootstrap</span>,
            <span class="tech-tag">Sass</span>,
            <span class="tech-tag">Git</span>, etc.
          </p>
            </div>
        </div>
    )
}

export default Skills