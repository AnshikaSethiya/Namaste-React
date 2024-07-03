import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Series</h2>
        <UserClass name={"Anshika Sethiya (Class)"} location={"Indore"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Series</h2>
//       {/* <User name={"Anshika Sethiya(Function)"} /> */}
//       <UserClass name={"Anshika Sethiya (Class)"} location={"Indore"} />
//     </div>
//   );
// };

export default About;
