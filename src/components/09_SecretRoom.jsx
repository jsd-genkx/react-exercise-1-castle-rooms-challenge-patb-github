import React, {useState} from "react";

const SecretRoom = ({message1, onReply}) => {
  const [reply, setReply] = useState("");

  function sendReply() {
    onReply(reply);
  }

  function handleChange({target}) {
    setReply(target.value);
  }
  return (
    <>
      <h2>SecretRoom</h2>
      <p>Message for JSD7: {message1}</p>

      <input type="text" onChange={handleChange}/>
      <button onClick={sendReply}>SUBMIT</button>
    </>
  );
};

export default SecretRoom;
