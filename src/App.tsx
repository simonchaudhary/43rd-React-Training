import React, { useEffect } from "react";
import { UserProvider } from "./contexts/Contexts";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import Router from "./Router";
import { fetchPhotos } from "./services/getPhotos";
import Home from "./pages/home";
import Text from "./components/Text";

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
  //   </MyProvider>
  // );
  // return (
  //   <div>
  //     <Router />
  //   </div>
  // );

  return (
    <UserProvider>
      <ComponentA />
      <ComponentB />
      <Text />
    </UserProvider>
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
