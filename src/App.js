import "./App.css";
import BillInfo from "./components/BillInfo/BillInfo";
import Header from "./components/Header/Header";
import SearchField from "./components/SearchField/SearchField";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchField />

      <BillInfo />
      {/* <BillInfoAdd /> */}
    </div>
  );
}

export default App;
