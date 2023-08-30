import { useEffect, useState } from "react";

function Message({ size, featherCount }) {
  const [message, setMessage] = useState("");
  const [sizeClass, setSizeClass] = useState("");

  useEffect(() => {
    if (featherCount <= 0) setMessage("Oh my! Your bird is naked!");
    else if (featherCount >= 10) {
      setMessage("Full turkey!");
    } else {
      setMessage("Coming along...");
    }
  }, [featherCount]);

  useEffect(() => {
    console.log("Message size", size);
    let name = "";

    switch (size) {
      case "m":
        name = "medium";
        break;
      case "l":
        name = "large";
        break;
      case "xl":
        name = "xlarge";
        break;
      default:
        name = "small";
        break;
    }
    // console.log(name);
    setSizeClass(name);
  }, [size]);

  useEffect(() => {
    console.log("Message", size);
  }, [size]);

  return (
    <div className={`message ${sizeClass}`}>
      {message}
    </div>
  );
}

export default Message;
