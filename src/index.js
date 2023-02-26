import React, { useState } from "react";
import { render } from "react-dom";
import { Modal } from "./lib";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ width: 640, margin: "15px auto" }}>
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal
        title="My Modal"
        onClose={() => {
          setShow(false);
        }}
        show={show}
      >
        <p>Employee Created !</p>
      </Modal>
    </div>
  );
};

render(<App />, document.getElementById("root"));
