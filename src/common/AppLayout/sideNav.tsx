import AuthContext from "contexts/AuthProvider";
import React, { useContext, useState } from "react";
import { FaBars, FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { studentNavigation } from "utils/navigationRoutes";
import SideWrapper from "./style";

type SideProp = {
  navigationModel: {
    path: string;
    icon: JSX.Element;
    title: string;
  }[];
};
function SideNav({ navigationModel }: SideProp) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { logout } = useContext(AuthContext);

  return (
    <SideWrapper style={{ width: isOpen ? "230px" : "60px" }}>
      <div className="top_section">
        <div className="top">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Humoni
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
      </div>
      <hr />
      {navigationModel.map(item => (
        <Link to={item.path} key={item.title} className="link">
          <div className="icon">{item.icon}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            {item.title}
          </div>
        </Link>
      ))}
      <div className="btnlogout">
        <button type="submit" onClick={logout} className="btn">
          <span>
            <FaPowerOff className="icon" />
          </span>
          <span style={{ display: isOpen ? "block" : "none" }}>Logout</span>
        </button>
      </div>
    </SideWrapper>
  );
}

export default SideNav;
