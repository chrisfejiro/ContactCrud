import React from 'react'
import Contact from "./Contact"

const FavouriteContact = (props) => {
  return (
    <div className="col-12 py-2" style={{ marginTop: "2px" }}>
      <div className="text-center text-white-50">Favorites</div>
      <div className="p-2">
        {props.contacts.map((contact, index) => {
          return (
            <Contact
              contact={contact}
              key={index}
              favoriteClick={props.favoriteClick}
              deleteContact={props.deleteContact}
              UpdateClick={props.UpdateClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FavouriteContact