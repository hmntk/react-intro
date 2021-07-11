import "./App.css";
// import { Counter } from "./Components/Counter";
import { Joinus } from "./Components/Joinus";
import { Settings } from "./Components/Settings";
import { Login } from "./Components/Login";
import { Contact } from "./Components/Contact";
import { Search } from "./Components/Search";
import { Help } from "./Components/Help";
import { Home } from "./Components/Home";
import { Download } from "./Components/Download";
import { Part2 } from "./Components/Part2";
import { Os } from "./Components/Os";
import { Mft } from "./Components/Mft";

function App() {
  const counter = 10;
  const arr = [1, 2, 3, 4, 5, 6, "el"];
  const data = [
    ["JOIN US", "join"],
    ["SETTINGS", "settings"],
    ["LOGIN", "login"],
    ["CONTACT", "contact"],
    ["SEARCH", "search"],
    ["HELP", "help"],
    ["HOME", "home"],
    ["DOWNLOAD", "download"],
  ];
  const os = ["Android", "BlackBerry", "iOS", "Windows"];
  const mft = ["Samsung", "HTC", "Apple", "Micromax"];

  return (
    <div className="App">
      {/* //this is a comment */}

      {/* {arr.map((el) => {
        return <Counter passedCounter={el} />;
      })}
      <Counter passedCounter={counter} /> */}
      <hr />
      <h1>Part1(Independant)</h1>
      <div className="grid">
        <Joinus />
        <Settings />
        <Login />
        <Contact />
        <Search />
        <Help />
        <Home />
        <Download />
      </div>
      <hr />
      <h1>Part2</h1>
      <div className="grid">
        {data.map((elt) => {
          return <Part2 className={elt[1]} passedElement={elt} />;
        })}
      </div>
      <hr />
      <h1>React Mobile OS</h1>
      <div>
        <h2>Mobile Operating System</h2>
        <ul>
          {os.map((elmt) => {
            return <Os passOn={elmt} />;
          })}
          <Os />
        </ul>
        <h2>Mobile Manufacturers</h2>
        <ul>
          {mft.map((elmnt) => {
            return <Mft passOn={elmnt} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
