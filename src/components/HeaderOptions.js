import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import "./HeaderOptions.css";
import { selectUser } from "../features/userSlice";

const HeaderOptions = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className='headerOptions'>
      {Icon && <Icon className='headerOptions__icon' />}
      {avatar && (
        <Avatar className='headerOptions__icon' src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className='headerOptions__title'>{title}</h3>
    </div>
  );
};

export default HeaderOptions;
