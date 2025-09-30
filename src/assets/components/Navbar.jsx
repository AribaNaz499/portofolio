
import { FaLinkedin , FaGithub, FaInstagram, FaFacebook} from 'react-icons/fa';
import logo from "../IMAGES/logo.png"

const Navbar = () => {
    return(
<nav className="flex item-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
<img src={logo} className="mx-2" width={150} height={33}
alt="Logo"/>
        </a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href=" https://www.linkedin.com/in/aribanaz001"
        target= "_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn">
            <FaLinkedin />
        </a>
        <a href="https://github.com/AribaNaz499/"
        target= "_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub">
            <FaGithub />
        </a>
        <a href="//"
        target= "_blank" 
        rel="noopener noreferrer"
        aria-label="Instagram">
            <FaInstagram />
        </a>
        <a href="//"
        target= "_blank" 
        rel="noopener noreferrer"
        aria-label="Facebook">
            <FaFacebook />
        </a>
    </div>
</nav>
    )
}
export default Navbar