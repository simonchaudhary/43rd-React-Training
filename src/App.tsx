import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import CounterToolkit from "./components/CounterToolkit";
import Login from "./pages/Login";
// import { fetchPhotos } from "./services/photos";
import { useAppDispatch } from "./hooks/redux";
import { fetchPhotos } from "./redux/slices/photo";
import Router from "./Router";

interface Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

function App() {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchPhotos());
  // }, []);

  // const [myPhotos, setMyPhotos] = useState<Photo[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     const data = await fetchPhotos();

  //     setMyPhotos(data);
  //   })();
  // }, []);

  return (
    <div>
      {/* My photos
      {myPhotos.map((item) => (
        <div className="w-80" key={item.id}>
          <h1>{item.albumId}</h1>
          <span>{item.title}</span>

          <img src={item.url} alt={item.title} />
        </div>
      ))} */}

      {/* <CounterToolkit /> */}
      <Router />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <UserProvider>
//       <ComponentA />
//       <ComponentB />
//       <Text />
//     </UserProvider>
//   );
// }
