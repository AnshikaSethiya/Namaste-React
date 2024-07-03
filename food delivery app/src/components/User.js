import React from "react";

const User = ({ name }) => {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Indore </h3>
      <h4>Contact: Anshika_Sethiya</h4>
    </div>
  );
};

export default User;
