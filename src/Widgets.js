import React from "react";
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return( <div className="widgets">
    <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
    </div>

    {newsArticle(" Tech layoffs are here", 'Top news - 9099 readers')}
    {newsArticle(" Bumper hikes for indian employees", 'Top news - 886 readers')}
    {newsArticle(" Pepsico to hire 1200", 'Top news - 793 readers')}
    {newsArticle(" Hiring slows across IT and startups", 'Top news - 10000+ readers')}
  </div>
  );
}

export default Widgets;
