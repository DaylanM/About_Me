import { Link } from "react-router-dom";
import { WebFooter } from "../styles/mainStyles";

const HomeFooter = () => (
  <>
    <WebFooter>
      <h3>
        <Link to='https://isitchristmas.com/'>Is it Christmas?</Link>
      </h3>
    </WebFooter>
  </>
)

export default HomeFooter;