import { Link } from 'react-router-dom';
import { HomeHeader, HomeHeaderTxt } from '../styles/mainStyles';

const Projects = () => (
  <>
    <HomeHeader>
      <HomeHeaderTxt>
        <h4>My very first Website (HTML & CSS)</h4>
        <Link to='https://github.com/DaylanM/First_website'>GitHub</Link>
        <br />
        <br />
        <h4>React on Rails To-Do-List</h4>
        <Link to='https://github.com/DaylanM/ror_todo'>GitHub</Link>
      </HomeHeaderTxt>
    </HomeHeader>
  </>
)

export default Projects;