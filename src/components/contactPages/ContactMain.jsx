import React from 'react';
import Header from "../../layout/Header";
import AddRandom from './AddRandom';
import RemoveContact from './RemoveContact';
import AddContact from "./AddContact";
import FavoriteContact from "./FavoriteContact"; 
import GeneralContact from "./GeneralContact"; 
import Footer from "../../layout/Footer"
class ContactMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "078954632",
          email: "ben@gmail.com",
          favorite: false,
        },
        {
          id: 2,
          name: "Pelumi Davids",
          phone: "0909478438",
          email: "pelumidavids@gmail.com",
          favorite: true,
        },
        {
          id: 3,
          name: "Peter Parker",
          phone: "0957975603",
          email: "peterparker@gmail.com",
          favorite: true,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }

  handleAddContact = (newContact) => {
    if (newContact.name === "") {
      return { status: "failure", msg: "Please Enter a valid name" };
    } else if (newContact.phone === "") {
      return { status: "failure", msg: "Please Enter a valid Phone Number" };
    }
    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name === newContact.name && x.phone === newContact.phone)
        return true;
    });
    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate Record" };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        favorite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "success", msg: "Contact was added successfully" };
    }
  };

  handleUpdateContact = (updatedContact) => {
    if (updatedContact.name === "") {
      return { status: "failure", msg: "Please Enter a valid name" };
    } else if (updatedContact.phone === "") {
      return { status: "failure", msg: "Please Enter a valid Phone Number" };
    }
    this.setState((prevState) => {
        return {
          contactList: prevState.contactList.map((obj)=>{
            if(obj.id=== updatedContact.id){
              return{
                ...obj,
                name:updatedContact.name,
                email:updatedContact.email,
                phone:updatedContact.phone
              }
          }
        return obj;
      }),
      isUpdating:false,
      selectedContact:undefined,
        };
      });
      return { status: "success", msg: "Contact was updated successfully" };
    
  };

  handleToggleFavorite = (Contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((c) => {
          if (c.id === Contact.id) {
            return { ...c, favorite: !c.favorite };
          }
          return c;
        }),
      };
    });
  };

  handleDeleteContact = (ContactId) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((c) => {
          return c.id !== ContactId;
        }),
      };
    });
  };
  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      favorite: false,
    };
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([newFinalContact]),
      };
    });
  };
  handleRemoveAllContact = (newContact) => {
    this.setState((prevState) => {
      return {
        contactList: [],
      };
    });
  };

  handleUpdateClick = (contact) => {
    this.setState((prevState) => {
      console.log(contact);
      return {
        selectedContact: contact,
        isUpdating: true,
      };
    });
  };
  handleCancelUpdateContact = (contact) => {
    this.setState((prevState) => {
      console.log(contact);
      return {
        selectedContact: undefined,
        isUpdating: false,
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandom handleAddRandomContact={this.handleAddRandomContact} />
            </div>
            <div className="col-4 row">
              <RemoveContact
                handleRemoveAllContact={this.handleRemoveAllContact}
              />
            </div>
            <div className="row py-2 ">
              <div className="col-8 offset-2 row">
                <AddContact
                  handleAddContact={this.handleAddContact}
                  selectedContact={this.state.selectedContact}
                  isUpdating={this.state.isUpdating}
                  cancel={this.handleCancelUpdateContact}
                  handleUpdateContact={this.handleUpdateContact}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavoriteContact
                  contacts={this.state.contactList.filter((x) => {
                    return x.favorite === true;
                  })}
                  favoriteClick={this.handleToggleFavorite}
                  deleteContact={this.handleDeleteContact}
                  UpdateClick={this.handleUpdateClick}
                />
              </div>
            </div>
            <div className="row py-2" style={{ marginTop: "4px" }}>
              <div className="col-8 offset-2 row">
                <GeneralContact
                  contacts={this.state.contactList.filter((x) => {
                    return x.favorite === false;
                  })}
                  favoriteClick={this.handleToggleFavorite}
                  deleteContact={this.handleDeleteContact}
                  UpdateClick={this.handleUpdateClick}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ContactMain;