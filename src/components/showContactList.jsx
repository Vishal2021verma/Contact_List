import React from "react";

function ShowContactList(props) {
  return (
    <div className="contactlist-div">
      <div className="contactlist-div-tab">
        <div className="contactlist-div-nameNum">
          <h3 className="name">{props.cName}</h3>
          <h4 className="number">{props.cNumber}</h4>
        </div>
        <div className="contactlist-div-tab-button">
          <button>View</button>
        </div>
      </div>
    </div>
  );
}

export default ShowContactList;
