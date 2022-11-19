import React, { useContext } from "react";
import "../index.css";
import SearchPage from "./searchPage";
import { HandleDelete } from "./App";

const MainNavbar = () => {
  const helper = useContext(HandleDelete);
  const { state, dispatch } = helper;
  return (
    <section >
      <div >
        <div >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="logo">
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt=""
          />
        </div>
      </div>
      <div className="search-bar">
        <div
          className="search-button ui icon"
          data-tooltip="Search"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="fas fa-search" />
        </div>
        <div className="text-input">
          <input
            type="text"
            placeholder="Search mail"
            value={state.searchItem}
            onChange={(e) =>
              dispatch({
                type: "setSearchItem",
                payload: { searchItem: e.target.value },
              })
            }
          />
        </div>
        {state.searchItem.length > 0 ? <SearchPage /> : ""}
        <div
          
          data-inverted=""
        >
         
        </div>
      </div>

      
        <div
          
        >
          
        <div
          
        >
         
        </div>
        <div
         
        >
          
        </div>
        <div
         
        >
          <img
            src=""
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default MainNavbar;
