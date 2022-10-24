import { hover } from "@testing-library/user-event/dist/hover";

const Navbar = () => {
    const style = {
        fontSize: "20px"
    }


    return (
        <nav className="navbar">
            <h1>Control Cognizant</h1>
            <div className="links" >
                <a href="https://nist.gov" style={style}>NIST</a>
                <a href="https://hitrustalliance.net/" style={style}>HITRUST</a>
            </div>
        </nav>
    );
}
export default Navbar;