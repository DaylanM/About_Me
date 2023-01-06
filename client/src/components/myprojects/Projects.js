import { Link } from 'react-router-dom';
import { HomeHeader, HomeHeaderTxt } from '../styles/mainStyles';

const Projects = () => (
  <>
    <HomeHeader>
      <HomeHeaderTxt>
        <h4>My very first Website (HTML & CSS)</h4>
        <a href='https://github.com/DaylanM/First_website' target='_blank'>GitHub</a>
        <br />
        <br />
        <h4>React on Rails To-Do-List</h4>
        <a href='https://github.com/DaylanM/ror_todo' target='_blank'>GitHub</a>
      </HomeHeaderTxt>
    </HomeHeader>
  </>
)

export default Projects;