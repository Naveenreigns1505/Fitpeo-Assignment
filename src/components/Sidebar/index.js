import React from "react";
import { BsGrid1X2Fill, BsListCheck, BsNut, BsBox } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlinePortrait, MdOutlineLiveHelp } from "react-icons/md";
import "./index.css";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsNut className="icon_header" /> Dashboard
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon active" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsBox className="icon box" /> Product
          </a>
          <div className="arrow">
            <FaChevronRight className="right" />
          </div>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <MdOutlinePortrait className="icon" /> Customers
          </a>
          <div className="arrow">
            <FaChevronRight className="right" />
          </div>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Income
          </a>
          <div className="arrow">
            <FaChevronRight className="right" />
          </div>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <CiDiscount1 className="icon" /> Promote
          </a>
          <div className="arrow">
            <FaChevronRight className="right" />
          </div>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <MdOutlineLiveHelp className="icon" /> Help
          </a>
          <div className="arrow">
            <FaChevronRight className="right" />
          </div>
        </li>
      </ul>
      <div className="sidebarBottom">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropButton active"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="itemName">
              <img
                className="profileImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCjSU_nbBoDD6JpgLPveUuiurNtHLNC01nIUMso2aA6PF2XBnKtw8BgOOM4i-FF_y6rM&usqp=CAU"
                alt=""
              />
              <div className="profiledetails">
                <div className="profileName">Evano</div>
                <p5 className="profilePosition">Project Manager </p5>
              </div>
            </div>
            <div className="arrow2">
              <FiChevronDown />
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
