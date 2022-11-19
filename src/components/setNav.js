import React from "react";

const SetNav = ({ dispatch }) => {
  return (
    <React.Fragment>
      <div
        className="nav-items primary"
        
        onClick={() =>
          dispatch({
            type: "setcurrentActive",
            payload: { currentActive: "primary" },
          })
        }
      >
        <div className="nav-img">
          <i className="fas fa-portrait"></i>
        </div>
        <span>Primary</span>
      </div>
     
      
    </React.Fragment>
  );
};

export default SetNav;
