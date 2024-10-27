import { NavLink } from "react-router-dom";

const Home = () =>{
    return(
        <ul>
            <li>
                <NavLink to="/" aria-current="page">Home</NavLink>
            </li>
        </ul>
    )
}

export default Home