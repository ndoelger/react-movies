import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar(){
    return (
        <nav>
        <Link to="/" >All Movies</Link>
        &nbsp; | &nbsp;
        <Link to="/actors" >Actors</Link>
        </nav>
    )
}