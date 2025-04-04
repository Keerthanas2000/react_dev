import { useState } from "react";

const GreenBox = () => (
  <div style={{ backgroundColor: "green", width: "100%", height: "100vh" }}></div>
);

const RedBox = () => (
  <div style={{ backgroundColor: "red", width: "100%", height: "100vh" }}></div>
);

const ConditionalRender = (props) => {
  const [data, setData] = useState(props.box);

  return (
    <>
      <button onClick={() => setData("Green")}>Click Me</button>
      {data === "Green" ? <GreenBox /> : <RedBox />}
    </>
  );
};

export default ConditionalRender;
