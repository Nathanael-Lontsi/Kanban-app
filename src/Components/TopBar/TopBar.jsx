import React from "react";
import "./TopBar.css";
import NotificationsNone from "@mui/icons-material";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIcons">
            <NotificationsNone />
          </div>
        </div>
      </div>
    </div>
  );
}
