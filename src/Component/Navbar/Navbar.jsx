
import "./Navbar.css"
import Logo from "../../assets/logo.png"

export default function Navbar(){
    return(
        <>
        <header>
            
                
                <nav>
                    <div className="logo">
                    <img src={Logo} alt="Logo" />
                    <h1>SoulUnfolding</h1>

                </div>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/#about">ABOUT</a></li>
                    <li><a href="/#service">SERVICE</a></li>
                    <li><a href="/#booking">BOOKINGS</a></li>
                    <li><a href="/#reviews">REVIEWS</a></li>
                </ul>
            </nav>
        </header>
        
        </>
    )
}