import Counter from "./components/Counter";

function App() {
  return (
    <div className="flex gap-2">
      <Counter initialValue={2} />

      {/* <Counter initialValue={3} /> */}
    </div>
  );
}

export default App;
