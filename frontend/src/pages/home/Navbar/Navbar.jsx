import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

import { LuLogOut } from "react-icons/lu";

import { useNavigate } from "react-router-dom";
import { useAuthContext} from "../../../context/AuthContext";
import useLogout from "../../../hooks/useLogout";


const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();

  const { authUser } = useAuthContext();
  const { loading, logout } = useLogout();
  

  const handleLogout = async () => {
    await logout();
  }


  return (
    <div className="navbar px-5 text-white text-xl flex items-center justify-between lg:py-5 bg-blue-500">
      <div className="flex items-center justify-between">
        <div className="flex xl:hidden items-center gap-8 w-full relative">
            <span onClick={() => setMenu((prev) => !prev)}>
              <RiMenu4Fill size={25}/>
            </span>
          {menu && (
            <div className="flex flex-col absolute border border-blue-400 top-12 left-10 w-40 bg-blue-600 z-50 shadow rounded-box glass">
              <ul className="flex flex-col items-center gap-4 my-4">
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                {authUser && (<li>
                  <Link to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                )}
                <li>
                  <Link to="/aboutUs">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/course">
                    Course
                  </Link>
                </li>
                <li>
                  <Link to="/placement">
                    Placement
                  </Link>
                </li>
                {/* <li>
                  <Link to="/onlineClasses">
                    Online Classes
                  </Link>
                </li> */}
                <li>
                  <Link to="/jobEnquiry">
                    Job Enquiry
                  </Link>
                </li>
                <li>
                  <Link to="/enquiry">
                    Enquiry
                  </Link>
                </li>
              </ul>
            </div>
          )}
      </div>
        <a className="btn btn-ghost text-2xl">Hartron</a>
      </div>
      <div className="hidden xl:flex items-center justify-end gap-8 w-full">
        <ul className="flex items-center gap-2 2xl:gap-4 2xl:text-2xl  text-xl cursor-pointer">
          <li className="2xl:px-4 px-2">
            <Link to="/">
              Home
            </Link>
          </li>
          {authUser && (<li className="2xl:px-4 px-2">
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>
          )}
          <li className="2xl:px-4 px-2">
            <Link to="/aboutUs">
              About Us
            </Link>
          </li>
          <li className="2xl:px-4 px-2">
            <Link to="/course">
              Course
            </Link>
          </li>
          <li className="2xl:px-4 px-2">
            <Link to="/placement">
              Placement
            </Link>
          </li>
          {/* <li className="2xl:px-4 px-2">
            <Link to="/onlineClasses">
              Online Classes
            </Link>
          </li> */}
          <li className="2xl:px-4 px-2">
            <Link to="/jobEnquiry">
              Job Enquiry
            </Link>
          </li>
          <li className="2xl:px-4 px-2">
            <Link to="/enquiry">
              Enquiry
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-10">
        <button className="btn btn-square w-20 glass btn-outline"
          onClick={authUser ?  handleLogout : () => navigate("/login")}
        >
          {authUser ? <span className={`${loading ? "loading loading-spinner" : ""}`}><LuLogOut size={25} /></span> : "Login"}
        </button>
      </div>
  </div>
  )
};

export default Navbar;
