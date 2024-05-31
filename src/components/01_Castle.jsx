import SecretRoom from "./09_SecretRoom";

const Castle = ({message1, onReply}) => {
  
  return (
    <div>
      <h2>Castle Room</h2>
      <p>Message for JSD7: {message1}</p>
      <SecretRoom message1={message1} onReply={onReply} />
    </div>
  );
};

export default Castle;
