import Card from "./components/Cards";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg bg-green-400 p-4 rounded-xl text-black mb-4">
        QAISAR IQBAL
      </h1>
      <Card username="Khan" btnText="click me" />
      <Card   username="iqbal"  btnText="visit me"/>
    </>
  );
}

export default App;
