import React, { useState } from "react";

const App = () => {
  const [showMode, setShowMode] = useState(true);

  const handleClick = () => {
    setShowMode(!showMode);
  };
  let content = null;


  if(showMode){
    content = <>
    <h1>Hello world</h1>
    <div>Message</div>
    
    </>
  }
  return <div></div>;
};

export default App;
