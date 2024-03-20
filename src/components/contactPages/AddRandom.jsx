import React from 'react'
import api from "../../Utility/api"
const GetRandomContact = async (props) => {
  const responseFromApi=await api();
  return props.handleAddRandomContact({
  name:responseFromApi.data.first_name + " " + responseFromApi.data.last_name,
  email:responseFromApi.data.email,
  phone:responseFromApi.data.phonenumber,
  });
};

const AddRandom = (props) => {
  return (
    <div>
      <button
        className="btn  btn-success form-control"
        onClick={() => GetRandomContact(props)}
      >
        Add Random Contact
      </button>
    </div>
  );
}

export default AddRandom
