import React from "react";
import { Avatar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItems = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
          alt='sidebar__background__image'
        />
        <Avatar className='sidebar__avatar' src={user.photoUrl}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,500</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,444</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <div className='sidebar__bottom__head'>
          <p>Recent</p>
          <ExpandMoreIcon />
        </div>
        {recentItems("React")}
        {recentItems("Vue")}
        {recentItems("Angular")}
        {recentItems("Software")}
        {recentItems("Testing")}
      </div>
    </div>
  );
}

export default Sidebar;
