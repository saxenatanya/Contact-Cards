import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";


function CreateCard(contact){
  return <Card name={contact.name} 
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
            key={contact.id}/>
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrT-eqhcfw_O5qMvCfpDj9r1IajTg5NBdCXQ&usqp=CAU"/>
      {contacts.map(CreateCard)}
    </div>
  );
}

export default App;
