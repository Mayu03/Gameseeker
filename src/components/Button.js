import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const Button = () => {
  //   const [yourId, setYourId] = useState();
  const [count, setCount] = useState(0);

  let socket = io("http://localhost:5000");
  useEffect(() => {
    socket.on("connect", function () {
      // console.log("Yeah I am connected!!");
    });
  }, []);

  socket.on("click_count", function (value) {
    // $('#counter').html(value);//Set new count value  //jQuery
    console.log("button value " + value);
    setCount(value);
  });

  //   let visitme = 0;

  const sendEvent = () => {
    // socket.emit("FromAPI", data => this.setState({ response: data }));
    socket.emit("clicked");
  };

  return (
    <div>
      {/* <button
        type="button"
        class="btn btn-primary btn-sm"
       
      >
        Small button
      </button>
      <p style={{ marginLeft: "46%" }}></p> */}
      <button
        type="button"
        class="btn btn-primary"
        style={{ marginLeft: "45%" }}
        onClick={sendEvent}
      >
        Buyers <span class="badge bg-secondary">{count}</span>
      </button>
    </div>
  );
};

export default Button;
