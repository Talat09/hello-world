import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import logo from "../../../assets/logo.png";
const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  const menu = (
    <>
      <li className="font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      {user?.uid ? (
        <>
          <li className="font-bold">
            <p> {user?.displayName}</p>
          </li>
          <div className="avatar">
            <div className="w-12 rounded-full mr-3">
              <img src={user?.photoURL} alt="profile-pic" />
            </div>
          </div>
          <li className="text-primary font-bold">
            <button
              onClick={handleLogOut}
              className="btn btn-primary text-white"
            >
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="text-primary font-bold">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={2}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>

        <Link to="/">
          <img className="w-36 " src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
    </div>
  );
};

export default Header;
