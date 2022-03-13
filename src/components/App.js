import "../styles.css";
import Headers from "./header";
import AddNew from "./AddNew";
import Details from "./detailsContact";
import ShowContactList from "./showContactList";
import { useState } from "react";

export default function App() {
  const [detailsA, setDetailsA] = useState([]);
  function addInList(newDetails) {
    setDetailsA((prevNotes) => {
      return [...prevNotes, newDetails];
    });
  }
  return (
    <div>
      <Headers />
      <div className="content-div">
        <div className="content-div-add-details">
          <AddNew addDetails={addInList} />
          <Details />
        </div>
        {console.log(detailsA)}
        <div className="content-div-list">
          <h1>Contact List</h1>
          {detailsA.map((contactList, index) => {
            return (
              <ShowContactList
                key={index}
                id={index}
                cName={contactList.name}
                cNumber={contactList.phoneNumber}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
//  > list tab
//
