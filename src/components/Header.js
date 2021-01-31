import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { useDispatch } from "react-redux";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOptions from "./HeaderOptions";
import "./Header.css";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";

const Header = () => {
  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
          alt='linkedin__logo'
        />
        <div className='header__search'>
          <SearchIcon />
          <input placeholder='Search' type='text' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOptions title='Home' Icon={HomeIcon} />
        <HeaderOptions title='My network' Icon={SupervisorAccountIcon} />
        <HeaderOptions title='Me' Icon={BusinessCenterIcon} />
        <HeaderOptions title='Messages' Icon={ChatIcon} />
        <HeaderOptions title='Notofications' Icon={NotificationsIcon} />
        <HeaderOptions avatar={true} title='Me' onClick={logoutApp} />
      </div>
    </div>
  );
};

export default Header;
