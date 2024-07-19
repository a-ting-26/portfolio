import styles from './Projects.module.css';
import ProjectCard from '../../common/ProjectCard';
import viberr from '../../assets/viberr.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={viberr}
            link='https://github.com/a-ting-26/Newsify'
            h3='Newsify'
            p='A Personalized News App'/>
        </div>
    </section>
  )
}

export default Projects;