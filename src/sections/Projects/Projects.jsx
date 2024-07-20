import styles from './Projects.module.css';
import ProjectCard from '../../common/ProjectCard';
import Newsify from '../../assets/newspaper-icon.png';
import Chess from '../../assets/chess-icon.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={Newsify}
            link='https://github.com/a-ting-26/Newsify'
            h3='Newsify'
            p='A Personalized News Aggregator'/>
            <ProjectCard 
            src={Chess}
            link='https://github.com/a-ting-26/Newsify'
            h3='Chess Game'
            p='A Chess Game App'/>
        </div>
    </section>
  )
}

export default Projects;