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

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
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
          Les rubriques
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">.</span>}
          >
            MyCommunity
          </MenuItem>
          <MenuItem icon={<FaGem />}> Histoire</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title="Formation"
            icon={<FaRegLaughWink />}
          >
            <MenuItem>Departement 1</MenuItem>
            <MenuItem>Departement 2</MenuItem>
            <MenuItem>Departement 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title="Parascolaire"
            icon={<FaHeart />}
          >
            <MenuItem>Club 1</MenuItem>
            <MenuItem>Club 2</MenuItem>
            <MenuItem>Club 3</MenuItem>
          </SubMenu>
          <SubMenu title="multiLevel" icon={<FaList />}>
            <MenuItem>'submenu' 1 </MenuItem>
            <MenuItem>'submenu' 2 </MenuItem>
            <SubMenu title={`'submenu' 3`}>
              <MenuItem>'submenu' 3.1 </MenuItem>
              <MenuItem>'submenu' 3.2 </MenuItem>
              <SubMenu title={`'submenu' 3.3`}>
                <MenuItem>'submenu' 3.3.1 </MenuItem>
                <MenuItem>'submenu' 3.3.2 </MenuItem>
                <MenuItem>'submenu' 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
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
