import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { adminNavigation } from "utils/navigationRoutes";
import TopNav from "../../common/AppLayout/topNav";
import AppContainer from "./style";

function AppLayout() {
  // const { authUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  // const userNavigations =
  //   authUser?.user.accountType[0] === "admin"
  //     ? businessNavigation
  //     : adminNavigation;
  const navigationModel = [...adminNavigation];

  return (
    <div>
      <TopNav
        toggle={toggle}
        isOpen={isOpen}
        navigationModel={navigationModel}
      />
      <AppContainer>
        <div className="container">
          <div className="sideContentBox">
            <div
              style={{ width: isOpen ? "230px" : "70px" }}
              className="boxside"
            >
              <div className="avatar">
                <Wrap>
                  <WrapItem>
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                  </WrapItem>
                </Wrap>
                <Wrap>
                  <p style={{ display: isOpen ? "block" : "none" }}>
                    Akintunde
                  </p>
                  <p style={{ display: isOpen ? "block" : "none" }}>
                    Akinsanmi
                  </p>
                </Wrap>
              </div>
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
            </div>
          </div>
          <div className="inner-content">
            <Outlet />
          </div>
        </div>
      </AppContainer>
    </div>
  );
}

export default AppLayout;
