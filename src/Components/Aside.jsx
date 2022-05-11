import React from "react";
import '../Styles/App.scss'
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart
} from "react-icons/fa";

const Aside = ({ collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <div className='split left'><div style={{height:"100vh"}}>
    <ProSidebar
      image={false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          Topics menu
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />}>MyCommunity</MenuItem>
          <MenuItem icon={<FaGem />}>History</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            
            title="Formation"
            icon={<FaRegLaughWink />}
          >
            <MenuItem>Departement 1</MenuItem>
            <MenuItem>Departement 2</MenuItem>
            <MenuItem>Departement 3</MenuItem>
          </SubMenu>
          <SubMenu
            title="Parascolaire"
            icon={<FaHeart />}
          >
            <MenuItem>Club 1</MenuItem>
            <MenuItem>Club 2</MenuItem>
            <MenuItem>Club 3</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px"
          }}
        >
          <a
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span> viewSource</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
    </div></div>
  );
};

export default Aside;
