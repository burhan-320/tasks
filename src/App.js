import Header from "./components/Header";
import ScaleGlobal from "./components/ScaleGlobal";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="home ">
        <Header />
        <Home />
      </div>
      <ScaleGlobal />
    </>
  );
}

export default App;
