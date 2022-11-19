import React, { useState, useEffect, useContext } from "react";
import "../sidebar.css";
import { HandleDelete } from "./App";

const SideNavbar = ({ setcurrentActive }) => {
  const [show, setShow] = useState(false);
  const [innerText, setInnerText] = useState("More");
  const [classt, setClasst] = useState("fas fa-chevron-down");
  const helper = useContext(HandleDelete);

  const { dispatch, state } = helper;

  useEffect(() => {
    show ? setInnerText("Less") : setInnerText("More");
    show ? setClasst("fas fa-chevron-up") : setClasst("fas fa-chevron-down");
  }, [show]);

  return (
    <div className="side-navbar">
      <div
        className="compose-btn"
        onClick={() =>
          dispatch({
            type: "setShowPopup",
            payload: { setShowPopup: !state.showPopUp },
          })
        }
      >
        <img
          src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
          alt="compose"
        />
        <span>Compose</span>
      </div>

      <div className="btn-group">
        <ul className="side-bar-btn-group1">
          <li>
            <div
              onClick={() =>
                dispatch({
                  type: "setcurrentActive",
                  payload: { currentActive: "primary" },
                })
              }
            >
              <i className="far fa-window-maximize"></i>
              <span>Inbox</span>
            </div>
          </li>
          <li>
            <div
              onClick={() =>
                dispatch({
                  type: "setcurrentActive",
                  payload: { currentActive: "starred" },
                })
              }
            >
             
              
            </div>
          </li>
          <li>
            <div
              onClick={() =>
                dispatch({
                  type: "setcurrentActive",
                  payload: { currentActive: "snooze" },
                })
              }
            >
              
            </div>
          </li>
          <li>
            <div
              onClick={() =>
                dispatch({
                  type: "setcurrentActive",
                  payload: { currentActive: "sent" },
                })
              }
            >
              <i className="fas fa-play"></i>
              <span>Sent</span>
            </div>
          </li>
          <li>
            <div onClick={() => setShow(!show)}>
              <i className={classt}></i>
              <span>{innerText}</span>
            </div>
          </li>
          {show ? (
            <React.Fragment>
              <li>
                <div
                  onClick={() =>
                    dispatch({
                      type: "setcurrentActive",
                      payload: { currentActive: "draft" },
                    })
                  }
                >
                  
                  
                </div>
              </li>
              <li>
                <div
                  onClick={() =>
                    dispatch({
                      type: "setcurrentActive",
                      payload: { currentActive: "spam" },
                    })
                  }
                >
                 
                  
                </div>
              </li>
              <li>
                <div
                  onClick={() =>
                    dispatch({
                      type: "setcurrentActive",
                      payload: { currentActive: "delete" },
                    })
                  }
                >
                  <i className="fas fa-trash"></i>
                  <span>Trash</span>
                </div>
              </li>
            </React.Fragment>
          ) : (
            ""
          )}
        </ul>

        <ul className="side-bar-btn-group1 another">
          <li>
            <div>
             
            </div>
          </li>
          <li>
            <div>
             
            </div>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
