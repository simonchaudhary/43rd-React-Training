import React, { useEffect } from "react";
import { MyProvider } from "./Contexts";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import Router from "./Router";
import { fetchPhotos } from "./services/getPhotos";
import Home from "./pages/home";

function App() {
  // useEffect(() => {
  //   fetchPhotos();
  // }, []);
  // return (
  //   <MyProvider>
  //     <div>
  //       <Home />
  //       <div className="flex gap-x-6">
  //         <ComponentA />
  //         <ComponentB />
  //       </div>
  //     </div>
  //     {/* <Router /> */}
  //   </MyProvider>
  // );

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;

{
  /* 
    <MyProvider>
      <div>
        <h1>Context API Example</h1>
        <ComponentA />
        <ComponentB />
      </div> 

    </MyProvider>*/
}
