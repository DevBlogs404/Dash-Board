import React, { useState } from "react";
import "./sidebar.scss";
import {
  Dashboard,
  SellOutlined,
  ScheduleOutlined,
  AccountCircleOutlined,
  SettingsOutlined,
  HelpOutline,
  ContactEmergencyOutlined,
} from "@mui/icons-material";

const Sidebar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h1 className="logo">Board.</h1>
        <div className="sidebar-center">
          <ul className="list">
            <li>
              <Dashboard className="icons" />
              <span>Dashboard</span>
            </li>
            <li>
              <SellOutlined className="icons" />
              <span>Transactions</span>
            </li>
            <li>
              <ScheduleOutlined className="icons" />
              <span>Schedules</span>
            </li>
            <li>
              <AccountCircleOutlined className="icons" />
              <span>Users</span>
            </li>
            <li>
              <SettingsOutlined className="icons" />
              <span>Settings</span>
            </li>
          </ul>
        </div>
      </div>

      <nav className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="nav-toggler" onClick={toggleMobileMenu}>
          <div className="nav-icon"></div>
          <div className="nav-icon"></div>
          <div className="nav-icon"></div>
        </div>
        <div className="mobile-menu">
          <ul className="mobile-list">
            <li>
              <Dashboard className="icons" />
              <span>Dashboard</span>
            </li>
            <li>
              <SellOutlined className="icons" />
              <span>Transactions</span>
            </li>
            <li>
              <ScheduleOutlined className="icons" />
              <span>Schedules</span>
            </li>
            <li>
              <AccountCircleOutlined className="icons" />
              <span>Users</span>
            </li>
            <li>
              <SettingsOutlined className="icons" />
              <span>Settings</span>
            </li>
            <li>
              <HelpOutline className="icons" />
              <span>Help</span>
            </li>
            <li>
              <ContactEmergencyOutlined className="icons" />
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </nav>

      <div className="sidebar-bottom">
        <ul className="list">
          <li>
            <HelpOutline className="icons" />
            <span>Help</span>
          </li>
          <li>
            <ContactEmergencyOutlined className="icons" />
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
