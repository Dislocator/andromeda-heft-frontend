import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleSidebar } from "../../store/actions";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./SidebarElements";
import * as actions from "../../store/actions";

const Sidebar = () => {
  const sidebar = useSelector((state) => state.ui.sidebar);
  console.log(sidebar, "Sidebar");
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(actions.closeSidebar());
  };
  return (
    <SidebarContainer isOpen={sidebar} onClick={() => handleSidebar()}>
      <Icon onClick={() => handleSidebar()}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={() => handleSidebar()}>
            About
          </SidebarLink>
          <SidebarLink to="generator" onClick={() => handleSidebar()}>
            Generator
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign in</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
