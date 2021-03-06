import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Widgets.css";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Corona at its peak",
        "US records highest rate of the corona virus"
      )}

      {newsArticle(
        "Corona at its peak",
        "US records highest rate of the corona virus"
      )}

      {newsArticle(
        "Corona at its peak",
        "US records highest rate of the corona virus"
      )}

      {newsArticle(
        "Corona at its peak",
        "US records highest rate of the corona virus"
      )}
    </div>
  );
};

export default Widgets;
