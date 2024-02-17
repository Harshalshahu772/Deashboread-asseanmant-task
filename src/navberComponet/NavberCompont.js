import { NavLink } from "react-router-dom";
import ArticuleComponet from "./ArticuleComponet";

const NavberCompont = ({ children }) => {
    return (
        <>
            <div className="container-fluid" style={{ display: "flex" }}>
                <div class="row">

                    <div className="navber">
                        <ul className="navbar-nav">
                            <li className="nav-item " style={{borderBottom:"1px solid white"}}>
                                <NavLink className="nav-link" to={"/Dashborad"}>Dashborad</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/Dashborad"}>Dashborad</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/Product"}>Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/Customer"}>Customer</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/Income"}>Income</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/Promote"}>Promote</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/HelpComponet"}>HelpComponet</NavLink>
                            </li>


                        </ul>
                    </div>
                </div>

                <div className="container">
                  
                    <ArticuleComponet/>
                    {/* <main style={{}}>{children}</main> */}
                </div>


            </div>

        </>
    );
};

export default NavberCompont;
