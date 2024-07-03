import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Child Constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    // console.log("Child Did Mount");
    const data = await fetch("https://api.github.com/users/AnshikaSethiya");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    // console.log("Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>location: {location}</h3>
        <h4>Contact: @anshikasethiya</h4>
      </div>
    );
  }
}

export default UserClass;
