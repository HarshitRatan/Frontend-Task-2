import React from "react";
import { Tabs } from "antd";
import LoginIcon from "../components/sideBarIcons/LoginIcon";
import HomeIcon from "../components/sideBarIcons/HomeIcon";
import UserIcon from "../components/sideBarIcons/UserIcon";
import CalendarIcon from "../components/sideBarIcons/CalendarIcon";
import ShareIcon from "../components/sideBarIcons/ShareIcon";
import FileIcon from "../components/sideBarIcons/FileIcon";
import FolderIcon from "../components/sideBarIcons/FolderIcon";
import HeartIcon from "../components/sideBarIcons/HeartIcon";
import BackIcon from "../components/sideBarIcons/BackIcon";
import Home from "../pages/Home/Home";
import SettingIcon from "../components/sideBarIcons/SettingIcon";
import UserNameIcon from "../components/sideBarIcons/UserNameIcon";

const Layout: React.FC = () => {
  const iconsArray = [
    <LoginIcon />,
    <HomeIcon />,
    <UserIcon />,
    <CalendarIcon />,
    <ShareIcon />,
    <FileIcon />,
    <FolderIcon />,
    <HeartIcon />,
    <BackIcon />,
    <></>,
    <></>,
    <></>,
    <></>,
    <SettingIcon />,
    <UserNameIcon />,
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        items={iconsArray.map((i, index) => {
          const id = String(index);
          return {
            label: i,
            key: id,
            disabled:index===9 || index===10 || index===11 || index===12,
            children: <Home />,
          };
        })}
      />
    </div>
  );
};

export default Layout;
