/* eslint-disable jsx-a11y/no-static-element-interactions */
import DrawerExample from "common/Drawer";
import React from "react";
import { FaBars, FaBell, FaRocketchat } from "react-icons/fa";
import { Link } from "react-router-dom";

import { TopWrapper } from "./style";

type SideProp = {
  toggle: () => void;
  isOpen: boolean;
  navigationModel: {
    path: string;
    icon: JSX.Element;
    title: string;
  }[];
};

function TopNav({ toggle, isOpen, navigationModel }: SideProp) {
  return (
    <>
      <TopWrapper>
        <div className="titlebox">
          <div className="mobilehide">
            <h1>People</h1>
          </div>
          <div className="brand">
            <h1 style={{ display: isOpen ? "block" : "none" }}>
              <Link to="/">People</Link>
            </h1>
            <span>
              <FaBars onClick={toggle} />
            </span>
          </div>
          <div className="box">
            <div className="item">
              <FaBell className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <FaRocketchat className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="mobilehide">
              <div className="bar">
                <DrawerExample navigationModel={navigationModel} />
              </div>
            </div>
          </div>
        </div>
      </TopWrapper>
    </>
  );
}

export default TopNav;
