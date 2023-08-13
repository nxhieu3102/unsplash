import MenuBar from "components/NavBar/MenuBar"
import SearchBar from "components/NavBar/SearchBar"
import LOGO from "assets/images/logo.png"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-between items-center">
            <div onClick={() => {navigate("/")}} className="cursor-pointer">
                <img src={LOGO} alt="logo" width="50" height="50" />
            </div>
            <div className="flex items-center">
                <MenuBar />
                <SearchBar />
            </div>
        </div>
    )
}

export default NavBar;