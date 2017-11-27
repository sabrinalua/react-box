import React, { Component } from "react";

class Contact extends React.Component {
  constructor(props){
      super(props);
      document.title = "React-Box::CONTACT";
  }
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is contact me at <a href="shiomaru92@gmail.com">email</a>.
        </p>
      </div>
    );
  }
}

export default Contact
